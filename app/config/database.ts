import 'reflect-metadata';
import { createConnection } from 'typeorm';
import log from './logger';

const database = async () => {
  try {
    await createConnection({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [`${__dirname}/../**/*.entity{.ts,.js}`],
      synchronize: true,
      logging: false
    });

    log.info('Connected to Postgres database...');
  } catch (error: any) {
    log.error('Failed: Connection to the database failed....');
    log.error(error);
  }
};

export default database;
