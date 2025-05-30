import { Module } from '@nestjs/common';
import { ScoreTypeService } from './score-type.service';
import { ScoreTypeController } from './score-type.controller';
import { ScoreType } from './entities/score-type.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ScoreType])],
  controllers: [ScoreTypeController],
  providers: [ScoreTypeService],
})
export class ScoreTypeModule {}
