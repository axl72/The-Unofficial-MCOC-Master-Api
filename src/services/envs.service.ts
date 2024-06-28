import env from 'env-var'

export const envs = {
    PORT: env.get('PORT').asPortNumber(),
    MSSQL_PASSWORD: env.get('MSSQL_PASSWORD').asString(),
    DATABASE_URL: env.get('DATABASE_URL').asString(),
    MAILER_SERVICE: env.get('MAILER_SERVICE').asString(),
    MAILER_EMAIL: env.get('MAILER_EMAIL').asString(),
    MAILER_KEY: env.get('MAILER_KEY').asString(),
    WEBSERVICE_URL: env.get('WEBSERVICE_URL'),
    TOKEN_SECRET_KEY: env.get('TOKEN_SECRET_KEY').asString()
}