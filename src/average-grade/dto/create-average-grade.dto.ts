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

  @ApiPropertyOptional({ example: 7.5, description: 'Semester GPA in October (10-point scale)' })
  @IsOptional()
  @IsNumber()
  semesterAverageOctober?: number;

  @ApiPropertyOptional({ example: 8.0, description: 'Semester GPA in April (10-point scale)' })
  @IsOptional()
  @IsNumber()
  semesterAverageApril?: number;

  @ApiPropertyOptional({ example: 3.0, description: 'Cumulative GPA in October (4-point scale)' })
  @IsOptional()
  @IsNumber()
  cumulativeGpaOctober?: number;

  @ApiPropertyOptional({ example: 3.5, description: 'Cumulative GPA in April (4-point scale)' })
  @IsOptional()
  @IsNumber()
  cumulativeGpaApril?: number;

  @ApiPropertyOptional({ example: 'Good', description: 'Academic classification' })
  @IsOptional()
  @IsString()
  @Length(0, 20)
  academicClassification?: string;

  @ApiPropertyOptional({ example: 20, description: 'Number of credits earned this semester' })
  @IsOptional()
  @IsInt()
  creditsEarned?: number;

  @ApiPropertyOptional({ example: 120, description: 'Total number of accumulated credits' })
  @IsOptional()
  @IsInt()
  creditsAccumulated?: number;

  @ApiPropertyOptional({ example: '2025-05-25T00:00:00.000Z', description: 'Date of GPA calculation' })
  @IsOptional()
  @IsDateString()
  calculatedAt?: string;
}
