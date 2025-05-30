// src/user-permissions/entities/user-permission.entity.ts

import {
  Entity,
  ManyToOne,
  JoinColumn,
  PrimaryColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/user/entities/user.entity';
import { Permission } from 'src/permission/entities/permission.entity';
@Entity('user_permissions')
export class UserPermission {
  @ApiProperty({ example: 'USER001' })
  @PrimaryColumn({ type: 'varchar', length: 10 })
  userId: string;

  @ApiProperty({ example: 'PERM001' })
  @PrimaryColumn({ type: 'varchar', length: 10 })
  permissionId: string;

  @ManyToOne(() => User, (user) => user.permissions, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: User;

  @ManyToOne(() => Permission, (permission) => permission.userPermissions, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'permissionId' })
  permission: Permission;
}
