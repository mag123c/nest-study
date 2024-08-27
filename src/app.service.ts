import { Injectable } from '@nestjs/common';
import { LectureRepository } from './repositories/lecture.repository';
import { TLectureList } from './type/lecture.type';

@Injectable()
export class AppService {
  constructor(private readonly lectureRepo: LectureRepository) {}

  async findLectures(): Promise<void> {
    const lecture = await this.lectureRepo.findOneBy({ id: 1 });
    console.log(lecture);
    console.log('Teacher: ', lecture?.teacher);
  }

  async findLectureListWithRepoApi(): Promise<TLectureList> {
    return await this.findLectureListWithRepoApi();
  }

  async findLectureListWithQueryBuilder(): Promise<TLectureList> {
    return await this.findLectureListWithQueryBuilder();
  }
}
