import { PartialType } from '@nestjs/swagger';
import { CreateScoreTypeDto } from './create-score-type.dto';

export class UpdateScoreTypeDto extends PartialType(CreateScoreTypeDto) {}
