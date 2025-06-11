// src/users/dto/create-user.dto.ts

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { PrimaryGeneratedColumn } from 'typeorm';

export class CreateUserDto {

  @ApiProperty({ example: 'securepassword123',nullable:true })
  @IsString()
  password: string;

  @ApiProperty({ example: 'johndoe@example.com',nullable:true })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'John Doe',nullable:true })
  @IsString()
  fullName: string;

  @ApiProperty({ example: 'admin',nullable:true })
  @IsString()
  role: string;

  @ApiProperty({ example: 'active',nullable:true })
  @IsString()
  status: string;

  // @ApiPropertyOptional({ example: 'LNK001',nullable:true })
  // @IsOptional()
  // @IsString()
  // linkCode?: string;

  @ApiPropertyOptional({ example: '2025-05-30T12:00:00Z',nullable:true })
  @IsOptional()
  createdAt?: Date;

  @ApiPropertyOptional({ example: '2025-05-30T18:00:00Z',nullable:true })
  @IsOptional()
  lastLoginAt?: Date;
}
