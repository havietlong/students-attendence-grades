// src/permissions/entities/permission.entity.ts

import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { UserPermission } from 'src/user-permission/entities/user-permission.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('permissions')
export class Permission {
  @ApiProperty({ example: 'PERM001' })
  @PrimaryColumn({ type: 'varchar', length: 10 })
  permissionId: string;

  @ApiProperty({ example: 'Admin Access' })
  @Column({ type: 'varchar', length: 100 })
  name: string;

  @ApiProperty({ example: 'Full access to system resources' })
  @Column({ type: 'varchar', length: 200 })
  description: string;

  @OneToMany(() => UserPermission, (userPermission) => userPermission.permission)
  userPermissions: UserPermission[];
}
