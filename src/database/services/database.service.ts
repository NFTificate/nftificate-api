// Third Party Dependencies.
import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';

import { ConfigService } from '@src/config/config.service';
dotenv.config();

const configService = new ConfigService();

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: configService.get('DB_HOST'),
  port: Number.parseInt(configService.get('DB_PORT'), 10),
  username: configService.get('DB_USERNAME'),
  password: configService.get('DB_PASSWORD'),
  database: configService.get('DB_NAME'),
  entities: ['**/*.entity{ .ts,.js}'],
  migrations: [__dirname + '/../**/migrations/*{.ts,.js}'],
  migrationsTableName: 'migrations',
  synchronize: configService.get('DB_SYNCHRONIZE') === 'true',
  ssl: configService.get('DB_SSL') === 'true',
});

AppDataSource.initialize()
  .then(() => {
    return AppDataSource;
  })
  .catch((error: unknown) => {
    throw new Error(String(error));
  });
