import { Test, TestingModule } from '@nestjs/testing';
import { AverageGradeService } from './average-grade.service';

describe('AverageGradeService', () => {
  let service: AverageGradeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AverageGradeService],
    }).compile();

    service = module.get<AverageGradeService>(AverageGradeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
