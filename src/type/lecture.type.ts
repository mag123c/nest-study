import { Lecture } from 'src/entities/lecture.entity';

export type TLectureList = Pick<
  Lecture,
  'title' | 'content' | 'price' | 'teacher'
>[];
