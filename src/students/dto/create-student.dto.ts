import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsDateString, IsEmail, IsOptional, IsEnum, IsNotEmpty } from 'class-validator';

export class CreateStudentDto {
  //   @ApiPropertyOptional({ description: 'Student ID (auto-generated)' })
  //   @IsOptional()
  //   @IsString()
  //   studentId?: string;

  @ApiProperty({ description: 'Full name of the student' })
  @IsOptional()
  @IsString()
  fullName: string;

  @ApiProperty({ description: 'Date of birth (YYYY-MM-DD)' })
  @IsOptional()
  @IsDateString()
  dateOfBirth: string;

  @ApiProperty({ enum: ['M','F'] })
  @IsOptional()
  @IsEnum(['M', 'F'])
  gender: 'M' | 'F' ;

  @ApiPropertyOptional({ description: 'Home address' })
  @IsOptional()
  @IsString()
  address?: string;

  @ApiPropertyOptional({ description: 'Email address' })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiPropertyOptional({ description: 'Phone number' })
  @IsOptional()
  @IsString()
  phoneNumber?: string;

  @ApiProperty({ description: 'Class ID the student belongs to' })
  @IsOptional()
  @IsString()
  classId: string;

  @ApiPropertyOptional({ enum: ['enrolled', 'graduated', 'dropped', 'suspended'] })
  @IsOptional()
  @IsEnum(['enrolled', 'graduated', 'dropped', 'suspended'])
  studyStatus?: 'enrolled' | 'graduated' | 'dropped' | 'suspended';

  @ApiProperty()
  userId: string;
}
