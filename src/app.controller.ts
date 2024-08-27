import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Lecture } from './entities/lecture.entity';

@Controller('api/v1')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('lectures')
  async findLectures(): Promise<Lecture[]> {
    await this.appService.findLectures();
    throw new Error('TEST');
  }
}
