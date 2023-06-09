require('dotenv').config();
const path = require('path');

module.exports = {
  type: 'postgres',
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  migrations: [
    path.resolve('src', 'shared', 'infra', 'typeorm', 'migrations', '*.ts')
  ],
  entities: [
    path.resolve('src', 'shared', 'infra', 'typeorm', 'entities', '*.ts')
  ],
  cli: {
    migrationsDir: path.resolve('src', 'shared', 'infra', 'typeorm', 'migrations'),
  },
}