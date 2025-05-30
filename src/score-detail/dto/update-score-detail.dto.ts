import { PartialType } from '@nestjs/swagger';
import { CreateScoreDetailDto } from './create-score-detail.dto';

export class UpdateScoreDetailDto extends PartialType(CreateScoreDetailDto) {}
