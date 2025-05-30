import { Test, TestingModule } from '@nestjs/testing';
import { ScoreDetailController } from './score-detail.controller';
import { ScoreDetailService } from './score-detail.service';

describe('ScoreDetailController', () => {
  let controller: ScoreDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScoreDetailController],
      providers: [ScoreDetailService],
    }).compile();

    controller = module.get<ScoreDetailController>(ScoreDetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
