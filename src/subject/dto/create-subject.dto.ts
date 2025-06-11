import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsInt } from 'class-validator';

export class CreateSubjectDto {
  @ApiProperty({ example: 'MH001' })
  @IsString()
  subjectCode: string;

  @ApiProperty({ example: 'Introduction to Programming' })
  @IsString()
  subjectName: string;

  @ApiProperty({ example: 3 })
  @IsInt()
  credit: number;

  @ApiProperty({ example: 30 })
  @IsInt()
  lectureHours: number;

  @ApiProperty({ example: 15 })
  @IsInt()
  practiceHours: number;

  @ApiProperty({ example: 'IT01', required: false })
  @IsOptional()
  @IsString()
  majorCode?: string;

  @ApiProperty({ example: 'MH000', required: false })
  @IsOptional()
  @IsString()
  prerequisiteSubjectCode?: string;
}
