import { Test, TestingModule } from '@nestjs/testing';
import { CourseClassService } from './course-class.service';

describe('CourseClassService', () => {
  let service: CourseClassService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CourseClassService],
    }).compile();

    service = module.get<CourseClassService>(CourseClassService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
