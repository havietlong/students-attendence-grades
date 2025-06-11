import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentDto } from './create-student.dto';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsDateString, IsEnum, IsOptional, IsEmail } from 'class-validator';

export class UpdateStudentDto extends PartialType(CreateStudentDto) {
 @ApiProperty({ description: 'Full name of the student' })
  @IsNotEmpty()
  @IsString()
  fullName: string;

  @ApiProperty({ description: 'Date of birth (YYYY-MM-DD)' })
  @IsNotEmpty()
  @IsDateString()
  dateOfBirth: string;

  @ApiProperty({ enum: ['M','F'] })
  @IsNotEmpty()
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
  @IsNotEmpty()
  @IsString()
  classId: string;

  @ApiPropertyOptional({ enum: ['enrolled', 'graduated', 'dropped', 'suspended'] })
  @IsOptional()
  @IsEnum(['enrolled', 'graduated', 'dropped', 'suspended'])
  studyStatus?: 'enrolled' | 'graduated' | 'dropped' | 'suspended';

}
