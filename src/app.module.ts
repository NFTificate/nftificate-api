// Third Party Dependencies.
import 'reflect-metadata';

import { Module } from '@nestjs/common';

import { ConfigModule } from './config/config.module';
// Context Modules.
import { UserModule } from './contexts/users/user.module';
// Core Modules.
import { HealthModule } from './core/health/health.module';
import { LoggerModule } from './core/logger/logger.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule,
    DatabaseModule,
    LoggerModule,
    HealthModule,
    UserModule,
  ],
})
export class AppModule {}
