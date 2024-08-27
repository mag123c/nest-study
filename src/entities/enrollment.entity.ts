import { BaseEntity } from 'src/abstract/base.entity';
import { Column, Entity, ManyToOne, Unique } from 'typeorm';
import { Lecture } from './lecture.entity';
import { Student } from './student.entity';

@Entity('enrollment', { database: 'test' })
@Unique(['lectureId', 'studentId'])
export class Enrollment extends BaseEntity {
  @Column('int', { name: 'lecture_id', nullable: false })
  lectureId!: number;
  @Column('int', { name: 'student_id', nullable: false })
  studentId!: number;
  @ManyToOne(() => Student, (student) => student.enrollments)
  student?: Student;
  @ManyToOne(() => Lecture, (lecture) => lecture.enrollments)
  lecture?: Lecture;
}
