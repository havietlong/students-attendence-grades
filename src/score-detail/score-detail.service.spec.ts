import { Test, TestingModule } from '@nestjs/testing';
import { ScoreDetailService } from './score-detail.service';

describe('ScoreDetailService', () => {
  let service: ScoreDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScoreDetailService],
    }).compile();

    service = module.get<ScoreDetailService>(ScoreDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
