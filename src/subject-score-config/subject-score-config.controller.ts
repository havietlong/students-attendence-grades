import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  ParseIntPipe,
  Patch,
  ParseArrayPipe,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SubjectScoreConfigService } from './subject-score-config.service';
import { CreateSubjectScoreConfigDto } from './dto/create-subject-score-config.dto';
import { UpdateSubjectScoreConfigDto } from './dto/update-subject-score-config.dto';
import { SubjectScoreConfig } from './entities/subject-score-config.entity';

@ApiTags('SubjectScoreConfig')
@Controller('subject-score-config')
export class SubjectScoreConfigController {
  constructor(private readonly service: SubjectScoreConfigService) { }

  @Post()
  @ApiOperation({ summary: 'Create a new subject score configuration' })
  @ApiResponse({ status: 201, description: 'Created successfully', type: SubjectScoreConfig })
  create(@Body() createDto: CreateSubjectScoreConfigDto) {
    return this.service.create(createDto);
  }

  @Post('many')
  @ApiOperation({ summary: 'Create many rows of subject score configuration' })
  createMany(
    @Body(new ParseArrayPipe({ items: CreateSubjectScoreConfigDto }))
    body: CreateSubjectScoreConfigDto[]
  ) {
    return this.service.createMany(body);
  }

  @Get(':courseClassId')
   @ApiOperation({ summary: 'Get subject score configurations based on courseClassId' })
  getByCourseClass(@Param('courseClassId') courseClassId: string) {
    return this.service.findByCourseClass(courseClassId);
  }


  @Get()
  @ApiOperation({ summary: 'Get all subject score configurations' })
  @ApiResponse({ status: 200, description: 'List of configs', type: [SubjectScoreConfig] })
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get subject score configuration by ID' })
  @ApiResponse({ status: 200, description: 'SubjectScoreConfig found', type: SubjectScoreConfig })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a subject score configuration' })
  @ApiResponse({ status: 200, description: 'Updated successfully', type: SubjectScoreConfig })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateDto: UpdateSubjectScoreConfigDto) {
    return this.service.update(id, updateDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a subject score configuration' })
  @ApiResponse({ status: 204, description: 'Deleted successfully' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
