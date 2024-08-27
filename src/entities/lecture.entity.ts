import { UpdatableEntity } from 'src/abstract/base.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Enrollment } from './enrollment.entity';
import { Teacher } from './teacher.entity';

@Entity('lecture', { database: 'test' })
export class Lecture extends UpdatableEntity {
  @Column('int', { name: 'teacher_id', nullable: false })
  teacherId!: number;
  @Column('varchar', { length: 100, unique: true, nullable: false })
  title!: string;
  @Column('text', { nullable: false })
  content!: string;
  @Column('int', { nullable: false })
  price!: number;
  @OneToMany(() => Enrollment, (enrollments) => enrollments.lecture)
  @JoinColumn({ referencedColumnName: 'enrollmentId' })
  enrollments?: Enrollment[];
  @ManyToOne(() => Teacher, (teacher) => teacher.lectures, { lazy: true })
  @JoinColumn({ name: 'teacher_id', referencedColumnName: 'id' })
  teacher?: Teacher;
}
