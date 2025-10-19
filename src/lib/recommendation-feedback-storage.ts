import { promises as fs } from 'fs'
import { randomUUID } from 'crypto'
import path from 'path'
import { getPool, isDatabaseEnabled } from '@/lib/storage/database'

const DATA_DIR = path.join(process.cwd(), 'data')
const DATA_FILE = path.join(DATA_DIR, 'recommendation-feedback.json')

export type RecommendedLanguageSnapshot = {
  id: string
  name: string
  matchScore: number
  successProbability?: number
  timeline?: string
  rank: number
}

export type RecommendationFeedback = {
  id: string
  createdAt: string
  rating: number
  comment?: string
  surveySubmissionId?: string
  selectedLanguageId?: string | null
  recommendedLanguages: RecommendedLanguageSnapshot[]
  metadata?: Record<string, unknown>
}

type SaveFeedbackPayload = Omit<RecommendationFeedback, 'id' | 'createdAt'>

// ---------------------------
// File-system storage fallback
// ---------------------------

async function ensureDataFile() {
  await fs.mkdir(DATA_DIR, { recursive: true })

  try {
    await fs.access(DATA_FILE)
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      await fs.writeFile(DATA_FILE, '[]', 'utf8')
    } else {
      throw error
    }
  }
}

async function readFeedbackFromFile(): Promise<RecommendationFeedback[]> {
  await ensureDataFile()
  const raw = await fs.readFile(DATA_FILE, 'utf8')
  try {
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

async function appendFeedbackToFile(payload: SaveFeedbackPayload): Promise<RecommendationFeedback> {
  const feedbackList = await readFeedbackFromFile()
  const feedback: RecommendationFeedback = {
    ...payload,
    id: randomUUID(),
    createdAt: new Date().toISOString(),
  }

  feedbackList.push(feedback)
  await fs.writeFile(DATA_FILE, JSON.stringify(feedbackList, null, 2), 'utf8')
  return feedback
}

// ---------------------------
// PostgreSQL-backed storage
// ---------------------------

let ensureTablePromise: Promise<void> | null = null

async function ensureTable() {
  if (!isDatabaseEnabled()) {
    return
  }

  if (!ensureTablePromise) {
    ensureTablePromise = (async () => {
      const client = await getPool().connect()
      try {
        await client.query(`
          CREATE TABLE IF NOT EXISTS recommendation_feedback (
            id UUID PRIMARY KEY,
            created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
            payload JSONB NOT NULL
          )
        `)
      } finally {
        client.release()
      }
    })()
  }

  await ensureTablePromise
}

async function readFeedbackFromDatabase(): Promise<RecommendationFeedback[]> {
  if (!isDatabaseEnabled()) {
    return readFeedbackFromFile()
  }

  await ensureTable()
  const result = await getPool().query<{ payload: RecommendationFeedback }>(
    `SELECT payload FROM recommendation_feedback ORDER BY created_at ASC`,
  )

  return result.rows
    .map((row) => row.payload)
    .filter((entry): entry is RecommendationFeedback => entry != null)
}

async function appendFeedbackToDatabase(payload: SaveFeedbackPayload): Promise<RecommendationFeedback> {
  if (!isDatabaseEnabled()) {
    return appendFeedbackToFile(payload)
  }

  await ensureTable()
  const feedback: RecommendationFeedback = {
    ...payload,
    id: randomUUID(),
    createdAt: new Date().toISOString(),
  }

  await getPool().query(
    `INSERT INTO recommendation_feedback (id, created_at, payload) VALUES ($1, $2, $3::jsonb)`,
    [feedback.id, feedback.createdAt, JSON.stringify(feedback)],
  )

  return feedback
}

// ---------------------------
// Public API
// ---------------------------

export async function readRecommendationFeedback(): Promise<RecommendationFeedback[]> {
  if (isDatabaseEnabled()) {
    return readFeedbackFromDatabase()
  }

  return readFeedbackFromFile()
}

export async function appendRecommendationFeedback(
  payload: SaveFeedbackPayload,
): Promise<RecommendationFeedback> {
  if (isDatabaseEnabled()) {
    return appendFeedbackToDatabase(payload)
  }

  return appendFeedbackToFile(payload)
}
