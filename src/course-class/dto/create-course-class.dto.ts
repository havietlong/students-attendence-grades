// create-course-class.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsDateString, IsOptional, IsArray } from 'class-validator';

export class CreateCourseClassDto {

  @ApiProperty({ example: 'SUBJ01' })
  @IsString()
  subjectCode: string;

  @ApiProperty({ example: 'GV001', required: false })
  @IsOptional()
  @IsString()
  lecturerId?: string;

  @ApiProperty({ example: 1 })
  @IsInt()
  semester: number;

  @ApiProperty({ example: '2024' })
  @IsString()
  academicYear: string;

  @ApiProperty({ example: 'Room 101' })
  @IsString()
  classroom: string;

  @ApiProperty({ example: '[1,3]', description: 'Day of week as integer, 1=Monday' })
  @IsArray()
  dayOfWeek: number[];

  @ApiProperty({ example: '2024-09-01' })
  @IsDateString()
  startDate: string;

  @ApiProperty({ example: '2024-12-15' })
  @IsDateString()
  endDate: string;

  @ApiProperty({ example: 50, description: 'Maximum number of students' })
  @IsInt()
  maxCapacity: number;
}
