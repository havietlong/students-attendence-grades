import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CourseClassService } from './course-class.service';
import { CreateCourseClassDto } from './dto/create-course-class.dto';
import { UpdateCourseClassDto } from './dto/update-course-class.dto';
import { CourseClass } from './entities/course-class.entity';

@ApiTags('Course Classes')
@Controller('course-classes')
export class CourseClassController {
  constructor(private readonly courseClassService: CourseClassService) {}

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
