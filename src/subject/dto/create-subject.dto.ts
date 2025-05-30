import { ApiProperty } from '@nestjs/swagger';

export class CreateSubjectDto {
  @ApiProperty({ example: 'MH001' })
  subjectCode: string;

  @ApiProperty({ example: 'Introduction to Programming' })
  subjectName: string;

  @ApiProperty({ example: 3 })
  credit: number;

  @ApiProperty({ example: 30 })
  lectureHours: number;

  @ApiProperty({ example: 15 })
  practiceHours: number;

  @ApiProperty({ example: 'IT01', required: false })
  majorCode?: string;

  @ApiProperty({ example: 'MH000', required: false })
  prerequisiteSubjectCode?: string;
}
