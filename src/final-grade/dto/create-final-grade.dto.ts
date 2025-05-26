import { IsString, IsNumber, IsDateString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateFinalGradeDto {
  @ApiProperty({ example: 'BKC12345', description: 'Student ID linked to this final grade' })
  @IsString()
  @IsNotEmpty()
  studentId: string;

  @ApiProperty({ example: 'CLC101', description: 'Course ID of the class' })
  @IsString()
  @IsNotEmpty()
  courseId: string;

  @ApiProperty({ example: 8.5, description: 'Final grade on a 10-point scale' })
  @IsNumber()
  grade10Scale: number;

  @ApiProperty({ example: 3.4, description: 'Final grade on a 4-point scale' })
  @IsNumber()
  grade4Scale: number;

  @ApiProperty({ example: 'B+', description: 'Letter grade (e.g., A, B+, C)' })
  @IsString()
  letterGrade: string;

  @ApiProperty({ example: 'Good', description: 'Academic classification (e.g., Excellent, Good)' })
  @IsString()
  classification: string;

  @ApiProperty({ example: 'Passed', description: 'Status of the final grade' })
  @IsString()
  status: string;

  @ApiProperty({ example: '2025-05-25T12:00:00Z', description: 'Date when the grade was calculated' })
  @IsDateString()
  calculatedAt: Date;
}
