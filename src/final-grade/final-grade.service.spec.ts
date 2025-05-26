import { Test, TestingModule } from '@nestjs/testing';
import { FinalGradeService } from './final-grade.service';

describe('FinalGradeService', () => {
  let service: FinalGradeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FinalGradeService],
    }).compile();

    service = module.get<FinalGradeService>(FinalGradeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
