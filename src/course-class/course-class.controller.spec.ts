import { Test, TestingModule } from '@nestjs/testing';
import { CourseClassController } from './course-class.controller';
import { CourseClassService } from './course-class.service';

describe('CourseClassController', () => {
  let controller: CourseClassController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CourseClassController],
      providers: [CourseClassService],
    }).compile();

    controller = module.get<CourseClassController>(CourseClassController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
