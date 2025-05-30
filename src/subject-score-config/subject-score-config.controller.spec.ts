import { Test, TestingModule } from '@nestjs/testing';
import { SubjectScoreConfigController } from './subject-score-config.controller';
import { SubjectScoreConfigService } from './subject-score-config.service';

describe('SubjectScoreConfigController', () => {
  let controller: SubjectScoreConfigController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubjectScoreConfigController],
      providers: [SubjectScoreConfigService],
    }).compile();

    controller = module.get<SubjectScoreConfigController>(SubjectScoreConfigController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
