import { Test, TestingModule } from '@nestjs/testing';
import { SubjectScoreConfigService } from './subject-score-config.service';

describe('SubjectScoreConfigService', () => {
  let service: SubjectScoreConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubjectScoreConfigService],
    }).compile();

    service = module.get<SubjectScoreConfigService>(SubjectScoreConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
