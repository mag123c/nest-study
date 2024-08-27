import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @CreateDateColumn({ name: 'created_time', type: 'timestamp' })
  createdTime!: Date;
}

export abstract class UpdatableEntity extends BaseEntity {
  @UpdateDateColumn({ name: 'updated_time', type: 'timestamp' })
  updatedTime!: Date;
}
