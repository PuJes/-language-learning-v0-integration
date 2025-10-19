import { promises as fs } from 'fs'
import { randomUUID } from 'crypto'
import path from 'path'
import { getPool, isDatabaseEnabled } from '@/lib/storage/database'

const DATA_DIR = path.join(process.cwd(), 'data')
const DATA_FILE = path.join(DATA_DIR, 'survey-submissions.json')

export type SurveyAnswer = {
  questionId: string
  answer: string
  weight?: number
}

export type SurveySubmission = {
  id: string
  createdAt: string
  answers: SurveyAnswer[]
  userSource?: string
  contentInterest?: string
  nativeLanguage?: string
  languageExperience?: string
  learningPurpose?: string
  timeExpectation?: string
  culturalInterest?: string | string[]
  learningStyle?: string
  persistence?: string
  difficultyPreference?: string
  dailyTime?: string
}

type SaveSurveyPayload = Omit<SurveySubmission, 'id' | 'createdAt'>

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

async function readSurveySubmissionsFromFile(): Promise<SurveySubmission[]> {
  await ensureDataFile()
  const raw = await fs.readFile(DATA_FILE, 'utf8')
  try {
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

async function appendSurveySubmissionToFile(payload: SaveSurveyPayload): Promise<SurveySubmission> {
  const submissions = await readSurveySubmissionsFromFile()
  const submission: SurveySubmission = {
    ...payload,
    id: randomUUID(),
    createdAt: new Date().toISOString(),
  }

  submissions.push(submission)
  await fs.writeFile(DATA_FILE, JSON.stringify(submissions, null, 2), 'utf8')
  return submission
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
          CREATE TABLE IF NOT EXISTS survey_submissions (
            id UUID PRIMARY KEY,
            created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
            survey JSONB NOT NULL
          )
        `)
      } finally {
        client.release()
      }
    })()
  }

  await ensureTablePromise
}

async function readSurveySubmissionsFromDatabase(): Promise<SurveySubmission[]> {
  if (!isDatabaseEnabled()) {
    return readSurveySubmissionsFromFile()
  }

  await ensureTable()
  const result = await getPool().query<{ survey: SurveySubmission }>(
    `SELECT survey FROM survey_submissions ORDER BY created_at ASC`,
  )

  return result.rows
    .map((row) => row.survey)
    .filter((submission): submission is SurveySubmission => submission != null)
}

async function appendSurveySubmissionToDatabase(payload: SaveSurveyPayload): Promise<SurveySubmission> {
  if (!isDatabaseEnabled()) {
    return appendSurveySubmissionToFile(payload)
  }

  await ensureTable()
  const submission: SurveySubmission = {
    ...payload,
    id: randomUUID(),
    createdAt: new Date().toISOString(),
  }

  await getPool().query(
    `INSERT INTO survey_submissions (id, created_at, survey) VALUES ($1, $2, $3::jsonb)`,
    [submission.id, submission.createdAt, JSON.stringify(submission)],
  )
  return submission
}

// ---------------------------
// Public API
// ---------------------------

export async function readSurveySubmissions(): Promise<SurveySubmission[]> {
  if (isDatabaseEnabled()) {
    return readSurveySubmissionsFromDatabase()
  }

  return readSurveySubmissionsFromFile()
}

export async function appendSurveySubmission(payload: SaveSurveyPayload): Promise<SurveySubmission> {
  if (isDatabaseEnabled()) {
    return appendSurveySubmissionToDatabase(payload)
  }

  return appendSurveySubmissionToFile(payload)
}
