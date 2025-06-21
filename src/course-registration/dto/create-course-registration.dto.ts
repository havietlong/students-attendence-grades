import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsDateString } from 'class-validator';

export class CreateCourseRegistrationDto {
  @ApiProperty({ example: 'STU001', description: 'Student ID' })
  @IsString()
  studentId: string;

  @ApiProperty({ example: 'CLS001', description: 'Class ID' })
  @IsString()
  classId: string;

  @ApiProperty({ example: '2025-05-27T10:00:00Z', description: 'Date of registration' })
  @IsDateString()
  registrationDate: Date;


}
