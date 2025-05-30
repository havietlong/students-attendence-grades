// src/users/dto/create-user.dto.ts

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'U001' })
  @IsString()
  @IsNotEmpty()
  userId: string;

  @ApiProperty({ example: 'johndoe' })
  @IsString()
  username: string;

  @ApiProperty({ example: 'securepassword123' })
  @IsString()
  password: string;

  @ApiProperty({ example: 'johndoe@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'John Doe' })
  @IsString()
  fullName: string;

  @ApiProperty({ example: 'admin' })
  @IsString()
  role: string;

  @ApiProperty({ example: 'active' })
  @IsString()
  status: string;

  @ApiPropertyOptional({ example: 'LNK001' })
  @IsOptional()
  @IsString()
  linkCode?: string;

  @ApiPropertyOptional({ example: '2025-05-30T12:00:00Z' })
  @IsOptional()
  createdAt?: Date;

  @ApiPropertyOptional({ example: '2025-05-30T18:00:00Z' })
  @IsOptional()
  lastLoginAt?: Date;
}
