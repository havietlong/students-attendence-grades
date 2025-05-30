// src/user-permissions/dto/create-user-permission.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserPermissionDto {
  @ApiProperty({ example: 'USER001' })
  userId: string;

  @ApiProperty({ example: 'PERM001' })
  permissionId: string;
}
