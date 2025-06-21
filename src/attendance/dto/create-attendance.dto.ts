import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsDateString, IsOptional, IsNumber } from 'class-validator';

export class CreateAttendanceDto {
  @ApiProperty({ example: 'CC101' })
  @IsString()
  courseClassId: string;

  @ApiProperty({ example: 'SV001' })
  @IsString()
  studentId: string;

  @ApiProperty({ example: '2025-03-15' })
  @IsDateString()
  date: string;

  @ApiProperty({ example: 'present', description: 'Attendance status' })
  @IsString()
  status: string;

    @ApiProperty({ example: '1', description: 'Id of class-seesion' })
  @IsOptional()
    @IsString()
  classSessionId?: string;

  // @ApiProperty({ example: 'Late by 10 mins', required: false })
  // @IsOptional()
  // @IsString()
  // note?: string;
}
