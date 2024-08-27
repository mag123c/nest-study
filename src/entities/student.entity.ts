import { UpdatableEntity } from 'src/abstract/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { Enrollment } from './enrollment.entity';

@Entity('student', { database: 'test' })
export class Student extends UpdatableEntity {
  @Column('varchar', { length: 100, unique: true, nullable: false })
  email!: string;
  @Column('varchar', { length: 20, nullable: false })
  nickname!: string;
  @OneToMany(() => Enrollment, (enrollment) => enrollment.student)
  enrollments?: Enrollment[];
}
