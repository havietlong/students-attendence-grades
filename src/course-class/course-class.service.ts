import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CourseClass } from './entities/course-class.entity';
import { CreateCourseClassDto } from './dto/create-course-class.dto';
import { UpdateCourseClassDto } from './dto/update-course-class.dto';

@Injectable()
export class CourseClassService {
  constructor(
    @InjectRepository(CourseClass)
    private readonly courseClassRepository: Repository<CourseClass>,
  ) {}

  async create(createDto: CreateCourseClassDto): Promise<CourseClass> {
    const courseClass = this.courseClassRepository.create(createDto);
    return this.courseClassRepository.save(courseClass);
  }

  async findAll(): Promise<CourseClass[]> {
    return this.courseClassRepository.find({ relations: ['subject', 'lecturer'] });
  }

  async findOne(id: string): Promise<CourseClass> {
    const courseClass = await this.courseClassRepository.findOne({
      where: { courseClassId: id },
      relations: ['subject', 'lecturer'],
    });
    if (!courseClass) {
      throw new NotFoundException(`CourseClass with ID ${id} not found`);
    }
    return courseClass;
  }

  async update(id: string, updateDto: UpdateCourseClassDto): Promise<CourseClass> {
    const courseClass = await this.findOne(id);
    Object.assign(courseClass, updateDto);
    return this.courseClassRepository.save(courseClass);
  }

  async remove(id: string): Promise<void> {
    const result = await this.courseClassRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`CourseClass with ID ${id} not found`);
    }
  }
}
