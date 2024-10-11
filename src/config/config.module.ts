// Third Party Dependencies.
import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';

// Local Dependencies.
import { ConfigService } from './config.service';

const envsConfig = {
  // production: '.env.development.prod',
  development: '.env.development.development',
  // test: '.env.development.test',
};

/**
 * @fileOverview Config Module.
 *
 * This module is responsible for providing the Config Service.
 *
 * @module ConfigModule
 */
@Module({
  imports: [
    NestConfigModule.forRoot({
      envFilePath:
        envsConfig[process.env.NODE_ENV as keyof typeof envsConfig] ||
        '.env.development.development',
      isGlobal: true,
    }),
  ],
  providers: [
    // Provide the Config Service.
    {
      provide: ConfigService,
      useValue: new ConfigService(),
    },
  ],
  exports: [ConfigService],
})
export class ConfigModule {}
