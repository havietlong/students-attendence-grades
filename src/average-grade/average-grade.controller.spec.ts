import { Test, TestingModule } from '@nestjs/testing';
import { AverageGradeController } from './average-grade.controller';
import { AverageGradeService } from './average-grade.service';

describe('AverageGradeController', () => {
  let controller: AverageGradeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AverageGradeController],
      providers: [AverageGradeService],
    }).compile();

    controller = module.get<AverageGradeController>(AverageGradeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
