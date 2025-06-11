import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsDateString, IsInt, IsOptional, Length, Min } from 'class-validator';

export class CreateClassSessionDto {
  @ApiProperty({ example: 'CS101-001' })
  @IsString()
  @Length(1, 10)
  courseClassId: string;

  @ApiProperty({ example: '2025-06-20' })
  @IsDateString()
  sessionDate: string;

  @ApiProperty({ example: 'Room 101', required: false })
  @IsOptional()
  @IsString()
  @Length(0, 20)
  classroom?: string;

  @ApiProperty({ example: 3 })
  @IsInt()
  @Min(1)
  startPeriod: number;

  @ApiProperty({ example: 2 })
  @IsInt()
  @Min(1)
  periodCount: number;
}
