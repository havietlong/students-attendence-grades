import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CourseClass } from './entities/course-class.entity';
import { CreateCourseClassDto } from './dto/create-course-class.dto';
import { UpdateCourseClassDto } from './dto/update-course-class.dto';
import { FilterCourseClassDto } from './dto/filter-course-class.dto';
import { ILike, Between, In, FindOptionsWhere } from 'typeorm';

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

  async findBySubjectCode(subjectCode: string): Promise<CourseClass[]> {
    return this.courseClassRepository.find({
      where: {
        subject: { subjectCode },
      },
      relations: ['subject', 'lecturer'],
    });
  }

  async findByLecturerId(lecturerId: string): Promise<CourseClass[]> {
    return this.courseClassRepository.find({
      where: {
        lecturer: { lecturerId },
      },
      relations: ['subject', 'lecturer'],
      order: {
        courseClassId: 'ASC',
      },
    });
  }


  async filter(filter: FilterCourseClassDto): Promise<CourseClass[]> {
    const where: FindOptionsWhere<CourseClass> = {};

    if (filter.subjectCode) where.subjectCode = filter.subjectCode;
    if (filter.lecturerId) where.lecturerId = filter.lecturerId;
    if (filter.semester) where.semester = filter.semester;
    if (filter.academicYear) where.academicYear = filter.academicYear;
    if (filter.classroom) where.classroom = ILike(`%${filter.classroom}%`);
    if (filter.startDate && filter.endDate)
      where.startDate = Between(filter.startDate, filter.endDate);
    if (filter.dayOfWeek !== undefined)
      where.dayOfWeek = In([filter.dayOfWeek]); // could adjust to contain logic

    return this.courseClassRepository.find({
      where,
      relations: ['subject', 'lecturer', 'sessions'],
      order: {
        courseClassId: 'ASC',
      },
    });
  }

  async findByStudentId(studentId: string): Promise<CourseClass[]> {
    return this.courseClassRepository
      .createQueryBuilder('courseClass')
      .leftJoinAndSelect('courseClass.subject', 'subject')
      .leftJoinAndSelect('courseClass.lecturer', 'lecturer')
      .leftJoin('courseClass.courseRegistrations', 'registration')
      .where('registration.studentId = :studentId', { studentId })
      .getMany();
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
