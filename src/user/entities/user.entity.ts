// src/users/entities/user.entity.ts

import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { UserPermission } from 'src/user-permission/entities/user-permission.entity';

@Entity('users')
export class User {
  @PrimaryColumn({ type: 'varchar', length: 10 })
  userId: string;

  @Column({ type: 'varchar', length: 50 })
  username: string;

  @Column({ type: 'varchar', length: 255 })
  password: string;

  @Column({ type: 'varchar', length: 100 })
  email: string;

  @Column({ type: 'varchar', length: 100 })
  fullName: string;

  @Column({ type: 'varchar', length: 20 })
  role: string;

  @Column({ type: 'varchar', length: 20 })
  status: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  linkCode: string;

  @Column({ type: 'timestamp', nullable: true })
  createdAt: Date;

  @Column({ type: 'timestamp', nullable: true })
  lastLoginAt: Date;

  @OneToMany(() => UserPermission, (perm) => perm.user)
  permissions: UserPermission[];
}
