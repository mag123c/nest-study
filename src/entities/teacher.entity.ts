import { UpdatableEntity } from 'src/abstract/base.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Lecture } from './lecture.entity';

@Entity('teacher', { database: 'test' })
export class Teacher extends UpdatableEntity {
  @Column('varchar', { length: 40, nullable: false })
  name!: string;
  @ManyToOne(() => Lecture, (lectures) => lectures.teacher)
  @JoinColumn({ name: 'id', referencedColumnName: 'teacherId' })
  lectures?: Lecture[];
}
