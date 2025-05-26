import { Test, TestingModule } from '@nestjs/testing';
import { FinalGradeController } from './final-grade.controller';
import { FinalGradeService } from './final-grade.service';

describe('FinalGradeController', () => {
  let controller: FinalGradeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FinalGradeController],
      providers: [FinalGradeService],
    }).compile();

    controller = module.get<FinalGradeController>(FinalGradeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
