import { Pool } from 'pg'

const CONNECTION_STRING =
  process.env.SURVEY_DATABASE_URL ||
  process.env.DATABASE_URL ||
  process.env.POSTGRES_PRISMA_URL ||
  process.env.POSTGRES_URL ||
  process.env.POSTGRESQL_URL ||
  null

let pool: Pool | null = null

export function isDatabaseEnabled(): boolean {
  return Boolean(CONNECTION_STRING)
}

export function getPool(): Pool {
  if (!CONNECTION_STRING) {
    throw new Error('Database connection string is not configured.')
  }

  if (!pool) {
    pool = new Pool({
      connectionString: CONNECTION_STRING,
      max: 5,
    })
  }

  return pool
}
