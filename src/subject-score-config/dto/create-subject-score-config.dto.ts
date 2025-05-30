// create-subject-score-config.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class CreateSubjectScoreConfigDto {
  @ApiProperty({ example: 'MH001' })
  subjectCode: string;

  @ApiProperty({ example: 'LD01' })
  scoreTypeId: string;

  @ApiProperty({ example: 40.5 })
  weightPercent: number;
}


