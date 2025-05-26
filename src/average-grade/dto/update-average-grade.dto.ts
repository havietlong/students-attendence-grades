import { PartialType } from '@nestjs/swagger';
import { CreateAverageGradeDto } from './create-average-grade.dto';

export class UpdateAverageGradeDto extends PartialType(CreateAverageGradeDto) {}
