import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { ClassSessionService } from './class-session.service';
import { CreateClassSessionDto } from './dto/create-class-session.dto';
import { UpdateClassSessionDto } from './dto/update-class-session.dto';
import { ClassSession } from './entities/class-session.entity';
import { SwapClassSessionDto } from './dto/swapp-class-session.dto';


@ApiTags('Class Sessions')
@Controller('class-session')
export class ClassSessionController {
  constructor(private readonly classSessionService: ClassSessionService) { }

  @Post()
  @ApiOperation({ summary: 'Create a new class session' })
  @ApiResponse({ status: 201, description: 'The class session has been created.', type: ClassSession })
  create(@Body() createDto: CreateClassSessionDto): Promise<ClassSession> {
    return this.classSessionService.create(createDto);
  }

  @Post('many')
  async createSessions(@Body() sessions: CreateClassSessionDto[]) {
    return await this.classSessionService.createMany(sessions);
  }


  @Get()
  @ApiOperation({ summary: 'Get all class sessions' })
  @ApiResponse({ status: 200, description: 'List of class sessions', type: [ClassSession] })
  findAll(): Promise<ClassSession[]> {
    return this.classSessionService.findAll();
  }

  @Get('by-course-class/:courseClassId')
  @ApiOperation({ summary: 'Get class sessions by courseClassId' })
  @ApiParam({ name: 'courseClassId', type: String })
  @ApiResponse({ status: 200, description: 'Class sessions for the course class', type: [ClassSession] })
  findByCourseClassId(@Param('courseClassId') courseClassId: string): Promise<ClassSession[]> {
    return this.classSessionService.findByCourseClassId(courseClassId);
  }


  @Get(':id')
  @ApiOperation({ summary: 'Get a class session by id' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'The found class session', type: ClassSession })
  findOne(@Param('id', ParseIntPipe) id: number): Promise<ClassSession> {
    return this.classSessionService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a class session by id' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'The updated class session', type: ClassSession })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: UpdateClassSessionDto,
  ): Promise<ClassSession> {
    return this.classSessionService.update(id, updateDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a class session by id' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 204, description: 'Class session deleted' })
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.classSessionService.remove(id);
  }

  @Post('swap')
  @ApiOperation({ summary: 'Swap periods between two class sessions on the same date' })
  async swapPeriods(@Body() dto: SwapClassSessionDto) {
    await this.classSessionService.swapPeriods(dto.sessionId1, dto.sessionId2);
    return { message: 'Sessions swapped successfully' };
  }
}
