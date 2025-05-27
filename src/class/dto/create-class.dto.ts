import { IsString, IsInt, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateClassDto {
  @ApiProperty({ example: 'CNTT01', description: 'Class ID' })
  @IsString()
  @Length(1, 10)
  classId: string;

  @ApiProperty({ example: 'Computer Science 1', description: 'Class name' })
  @IsString()
  @Length(1, 50)
  className: string;

  @ApiProperty({ example: 'CN', description: 'Major ID' })
  @IsString()
  @Length(1, 10)
  majorId: string;

  @ApiProperty({ example: '2023–2027', description: 'Academic year' })
  @IsString()
  @Length(1, 20)
  academicYear: string;

  @ApiProperty({ example: 'Dr. John Smith', description: 'Homeroom teacher' })
  @IsString()
  @Length(1, 100)
  homeroomTeacher: string;

  @ApiProperty({ example: 50, description: 'Class size' })
  @IsInt()
  classSize: number;
}
