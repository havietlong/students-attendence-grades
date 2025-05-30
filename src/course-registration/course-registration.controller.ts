import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CourseRegistrationService } from './course-registration.service';
import { CreateCourseRegistrationDto } from './dto/create-course-registration.dto';
import { CourseRegistration } from './entities/course-registration.entity';

@ApiTags('Course Registration')
@Controller('course-registrations')
export class CourseRegistrationController {
  constructor(private readonly courseRegistrationService: CourseRegistrationService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new course registration' })
  create(
    @Body() createCourseRegistrationDto: CreateCourseRegistrationDto,
  ): Promise<CourseRegistration> {
    return this.courseRegistrationService.create(createCourseRegistrationDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all course registrations' })
  findAll(): Promise<CourseRegistration[]> {
    return this.courseRegistrationService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a specific course registration by ID' })
  findOne(@Param('id') id: string): Promise<CourseRegistration> {
    return this.courseRegistrationService.findOne(id);
  }
}
