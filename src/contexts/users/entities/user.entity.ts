// Third Party Dependencies.
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id?: string;

  @Column({ name: 'name', nullable: false, length: 45, type: 'varchar' })
  name?: string;

  @Column({ name: 'last_name', nullable: true, length: 45, type: 'varchar' })
  lastName?: string;

  @Column({ name: 'email', nullable: true, length: 45, type: 'varchar' })
  email?: string;

  @Column({ name: 'password', nullable: false, length: 255, type: 'varchar' })
  password?: string;

  @Column({ name: 'wallet', length: 45, type: 'varchar', default: '' })
  wallet?: string;

  @Column({ name: 'activation_token', nullable: true, type: 'varchar' })
  activationToken?: string;

  @Column({ name: 'reset_password_token', nullable: true, type: 'text' })
  resetPasswordToken?: string;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt?: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt?: Date;
}
