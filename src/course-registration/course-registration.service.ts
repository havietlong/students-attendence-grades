import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CourseRegistration } from './entities/course-registration.entity';
import { CreateCourseRegistrationDto } from './dto/create-course-registration.dto';

@Injectable()
export class CourseRegistrationService {
  constructor(
    @InjectRepository(CourseRegistration)
    private readonly registrationRepository: Repository<CourseRegistration>,
  ) {}

  async create(
    createDto: CreateCourseRegistrationDto,
  ): Promise<CourseRegistration> {
    const registration = this.registrationRepository.create(createDto);
    return this.registrationRepository.save(registration);
  }

  async findAll(): Promise<CourseRegistration[]> {
    return this.registrationRepository.find();
  }

  async findOne(id: string): Promise<CourseRegistration> {
    const registration = await this.registrationRepository.findOne({
      where: { registrationId: id },
    });
    if (!registration) {
      throw new NotFoundException(`Registration with ID ${id} not found`);
    }
    return registration;
  }
}
