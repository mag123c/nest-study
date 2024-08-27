import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfig } from 'config/database.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LectureRepository } from './repositories/lecture.repository';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: DatabaseConfig,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, LectureRepository],
})
export class AppModule {}
