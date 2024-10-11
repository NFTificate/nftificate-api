// database.module.ts
import { Global, Module, OnModuleDestroy } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ConfigModule } from '../config/config.module';
import { ConfigService } from '../config/config.service';
import { AppDataSource } from './services/database.service';

@Global()
@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: () => ({
        ...AppDataSource.options,
      }),
    }),
  ],
  providers: [],
  exports: [TypeOrmModule],
})
export class DatabaseModule implements OnModuleDestroy {
  async onModuleDestroy(): Promise<void> {
    await AppDataSource.destroy();
  }
}
