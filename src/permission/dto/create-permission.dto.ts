// src/permissions/dto/create-permission.dto.ts

import { ApiProperty } from '@nestjs/swagger';

export class CreatePermissionDto {
  @ApiProperty({ example: 'PERM001' })
  permissionId: string;

  @ApiProperty({ example: 'Admin Access' })
  name: string;

  @ApiProperty({ example: 'Grants full access to all system features.' })
  description: string;
}
