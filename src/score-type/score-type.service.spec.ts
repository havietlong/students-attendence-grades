import { Test, TestingModule } from '@nestjs/testing';
import { ScoreTypeService } from './score-type.service';

describe('ScoreTypeService', () => {
  let service: ScoreTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScoreTypeService],
    }).compile();

    service = module.get<ScoreTypeService>(ScoreTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
