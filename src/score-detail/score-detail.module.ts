import { Module } from '@nestjs/common';
import { ScoreDetailService } from './score-detail.service';
import { ScoreDetailController } from './score-detail.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScoreDetail } from './entities/score-detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ScoreDetail])],
  controllers: [ScoreDetailController],
  providers: [ScoreDetailService],
})
export class ScoreDetailModule {}
