import env from 'env-var'

export const envs = {
    PORT: env.get('PORT').asPortNumber(),
    MSSQL_PASSWORD: env.get('MSSQL_PASSWORD').asString(),
    DATABASE_URL: env.get('DATABASE_URL').asString(),
}