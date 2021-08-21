import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UsersStatus } from '../enums/users-status.enum';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column()
  lastname: string;

  @Column()
  gender: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  phone: string;

  @Column()
  address: string;

  @Column()
  age: number;

  @Column()
  group: string; // speleological group

  @Column()
  role: string;

  @Column({ default: UsersStatus.ACTIVE })
  status: UsersStatus;

  @Column({ type: 'timestamptz', nullable: true })
  createdAt: Date;

  @Column({ type: 'timestamptz', nullable: true })
  updatedAt: Date;

  @Column({ type: 'timestamptz', nullable: true })
  deletedAt: Date;
}
