import { Test, TestingModule } from '@nestjs/testing';
import { ScoreTypeController } from './score-type.controller';
import { ScoreTypeService } from './score-type.service';

describe('ScoreTypeController', () => {
  let controller: ScoreTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScoreTypeController],
      providers: [ScoreTypeService],
    }).compile();

    controller = module.get<ScoreTypeController>(ScoreTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
