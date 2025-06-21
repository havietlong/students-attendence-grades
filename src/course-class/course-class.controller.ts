import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger';
import { CourseClassService } from './course-class.service';
import { CreateCourseClassDto } from './dto/create-course-class.dto';
import { UpdateCourseClassDto } from './dto/update-course-class.dto';
import { CourseClass } from './entities/course-class.entity';
import { FilterCourseClassDto } from './dto/filter-course-class.dto';

@ApiTags('Course Classes')
@Controller('course-classes')
export class CourseClassController {
  constructor(private readonly courseClassService: CourseClassService) { }

  @Post()
  @ApiOperation({ summary: 'Create a new course class' })
  @ApiResponse({ status: 201, description: 'Course class created.', type: CourseClass })
  async create(@Body() createDto: CreateCourseClassDto): Promise<CourseClass> {
    return this.courseClassService.create(createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all course classes' })
  @ApiResponse({ status: 200, description: 'List of all course classes.', type: [CourseClass] })
  async findAll(): Promise<CourseClass[]> {
    return this.courseClassService.findAll();
  }

  @Get('subject/:subjectCode')
  @ApiOperation({ summary: 'Get course classes by subject code' })
  @ApiResponse({ status: 200, description: 'Course classes found by subject code.', type: [CourseClass] })
  async findBySubjectCode(@Param('subjectCode') subjectCode: string): Promise<CourseClass[]> {
    return this.courseClassService.findBySubjectCode(subjectCode);
  }

  @Get('filter')
  async filterCourseClasses(
    @Query() filterDto: FilterCourseClassDto,
  ) {
    return this.courseClassService.filter(filterDto);
  }

  @Get('student/:studentId')
  @ApiOperation({ summary: 'Get course classes by student ID' })
  @ApiResponse({ status: 200, description: 'Course classes found by student ID.', type: [CourseClass] })
  async findByStudentId(@Param('studentId') studentId: string): Promise<CourseClass[]> {
    return this.courseClassService.findByStudentId(studentId);
  }

  @Get('lecturer/:lecturerId')
  @ApiOperation({ summary: 'Get course classes by lecturer ID' })
  @ApiResponse({ status: 200, description: 'Course classes found by lecturer ID.', type: [CourseClass] })
  async findByLecturerId(@Param('lecturerId') lecturerId: string): Promise<CourseClass[]> {
    return this.courseClassService.findByLecturerId(lecturerId);
  }



  @Get(':id')
  @ApiOperation({ summary: 'Get a course class by ID' })
  @ApiResponse({ status: 200, description: 'The found course class.', type: CourseClass })
  async findOne(@Param('id') id: string): Promise<CourseClass> {
    return this.courseClassService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a course class by ID' })
  @ApiResponse({ status: 200, description: 'The updated course class.', type: CourseClass })
  async update(
    @Param('id') id: string,
    @Body() updateDto: UpdateCourseClassDto,
  ): Promise<CourseClass> {
    return this.courseClassService.update(id, updateDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a course class by ID' })
  @ApiResponse({ status: 204, description: 'Course class deleted.' })
  async remove(@Param('id') id: string): Promise<void> {
    return this.courseClassService.remove(id);
  }
}
