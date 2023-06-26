const config = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.NODE_PORT || 3000,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: prodcess.env.DB_NAME,
  dbPort: prodcess.env.DB_Port,
}