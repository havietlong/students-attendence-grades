import { Module } from '@nestjs/common';
import { SubjectScoreConfigService } from './subject-score-config.service';
import { SubjectScoreConfigController } from './subject-score-config.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubjectScoreConfig } from './entities/subject-score-config.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SubjectScoreConfig])],
  controllers: [SubjectScoreConfigController],
  providers: [SubjectScoreConfigService],
})
export class SubjectScoreConfigModule {}
