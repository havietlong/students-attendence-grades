import { ApiProperty } from '@nestjs/swagger';

export class CreateScoreTypeDto {
  @ApiProperty({ example: 'LD01' })
  scoreTypeId: string;

  @ApiProperty({ example: 'Midterm Exam' })
  scoreTypeName: string;

  @ApiProperty({ example: 20.0 })
  percentage: number;
}
