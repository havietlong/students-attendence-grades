import { Test, TestingModule } from '@nestjs/testing';
import { LecturersController } from './lecturer.controller';
import { LecturersService } from './lecturer.service';

describe('LecturerController', () => {
  let controller: LecturersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LecturersController],
      providers: [LecturersService],
    }).compile();

    controller = module.get<LecturersController>(LecturersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
