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
  ) { }

  async create(createDto: CreateCourseClassDto): Promise<any> {
    const courseClass = this.courseClassRepository.create(createDto);
    const savedClass = await this.courseClassRepository.save(courseClass);

    const sessionDates = this.generateSessionDates(
      savedClass.dayOfWeek,
      savedClass.startDate,
      savedClass.endDate
    );

    return {
      ...savedClass,
      sessionDates
    };
  }

  private generateSessionDates(daysOfWeek: number[], startDate: Date, endDate: Date): string[] {
    const dates: string[] = [];
    const current = new Date(startDate);

    while (current <= new Date(endDate)) {
      if (daysOfWeek.includes(current.getDay())) {
        dates.push(current.toISOString().split('T')[0]); // format: YYYY-MM-DD
      }
      current.setDate(current.getDate() + 1);
    }

    return dates;
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
