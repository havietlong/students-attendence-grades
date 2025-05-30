// create-course-class.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsDateString, IsOptional } from 'class-validator';

export class CreateCourseClassDto {
  @ApiProperty({ example: 'CC101' })
  @IsString()
  courseClassId: string;

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

  @ApiProperty({ example: 2, description: 'Day of week as integer, 1=Monday' })
  @IsInt()
  dayOfWeek: number;

  @ApiProperty({ example: 3, description: 'Start period of the day' })
  @IsInt()
  startPeriod: number;

  @ApiProperty({ example: 4, description: 'Number of periods for this class' })
  @IsInt()
  periodCount: number;

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
