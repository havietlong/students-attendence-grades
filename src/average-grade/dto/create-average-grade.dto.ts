import {
  IsString,
  IsInt,
  IsOptional,
  IsNumber,
  IsDateString,
  Length,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateAverageGradeDto {
  @ApiProperty({ example: 'BKC12345', description: 'Student ID' })
  @IsString()
  @Length(1, 10)
  studentId: string;

  @ApiProperty({ example: 1, description: 'Semester number (e.g., 1 or 2)' })
  @IsInt()
  semester: number;

  @ApiProperty({ example: '2024-2025', description: 'Academic year' })
  @IsString()
  @Length(1, 10)
  academicYear: string;

  @ApiPropertyOptional({
    example: 7.5,
    description: 'Semester GPA on 10-point scale',
  })
  @IsOptional()
  @IsNumber()
  semesterGpaScale10?: number;

  @ApiPropertyOptional({
    example: 3.2,
    description: 'Semester GPA on 4-point scale',
  })
  @IsOptional()
  @IsNumber()
  semesterGpaScale4?: number;

  @ApiPropertyOptional({
    example: 8.1,
    description: 'Cumulative GPA on 10-point scale',
  })
  @IsOptional()
  @IsNumber()
  cumulativeGpaScale10?: number;

  @ApiPropertyOptional({
    example: 3.4,
    description: 'Cumulative GPA on 4-point scale',
  })
  @IsOptional()
  @IsNumber()
  cumulativeGpaScale4?: number;

  @ApiPropertyOptional({
    example: 'Excellent',
    description: 'Academic classification based on GPA',
  })
  @IsOptional()
  @IsString()
  @Length(0, 20)
  academicClassification?: string;

  @ApiPropertyOptional({
    example: 20,
    description: 'Number of credits earned this semester',
  })
  @IsOptional()
  @IsInt()
  creditsEarned?: number;

  @ApiPropertyOptional({
    example: 120,
    description: 'Total accumulated credits',
  })
  @IsOptional()
  @IsInt()
  creditsAccumulated?: number;

  @ApiPropertyOptional({
    example: '2025-05-25T00:00:00.000Z',
    description: 'Date when GPA was calculated',
  })
  @IsOptional()
  @IsDateString()
  calculatedAt?: string;
}
