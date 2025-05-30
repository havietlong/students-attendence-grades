import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsDateString, IsOptional } from 'class-validator';

export class CreateScoreDetailDto {
  @ApiProperty({ example: 'SV001' })
  @IsString()
  studentId: string;

  @ApiProperty({ example: 'LHP001' })
  @IsString()
  classCode: string;

  @ApiProperty({ example: 'LD01' })
  @IsString()
  scoreType: string;

  @ApiProperty({ example: 8.5 })
  @IsNumber()
  score: number;

  @ApiProperty({ example: '2024-09-01T10:00:00Z' })
  @IsDateString()
  entryDate: Date;

  @ApiProperty({ example: 'GV001' })
  @IsString()
  enteredBy: string;
}
