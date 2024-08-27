import { Injectable } from '@nestjs/common';
import { Lecture } from 'src/entities/lecture.entity';
import { TLectureList } from 'src/type/lecture.type';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class LectureRepository extends Repository<Lecture> {
  constructor(private readonly dataSource: DataSource) {
    super(Lecture, dataSource.createEntityManager());
  }

  //강의 리스트 반환.
  async findLecturesWithTeachersWithRepoAPI(): Promise<TLectureList> {
    return await this.find({
      select: ['title', 'content', 'price', 'teacher'],
      relations: ['teacher'],
    });
  }

  //강의 리스트 반환.
  async findLecturesWithTeachersWithQueryBuilder(): Promise<TLectureList> {
    return await this.createQueryBuilder('l')
      .innerJoinAndSelect('l.teacher', 't')
      .select(['l.title, l.content, l.price', 't.name'])
      .getMany();
  }
}
