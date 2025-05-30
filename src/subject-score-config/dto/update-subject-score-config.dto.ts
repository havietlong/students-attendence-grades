import { PartialType } from '@nestjs/swagger';
import { CreateSubjectScoreConfigDto } from './create-subject-score-config.dto';

export class UpdateSubjectScoreConfigDto extends PartialType(CreateSubjectScoreConfigDto) {}
