import { Controller, Get, Post, Body, Param, Delete, Put, Patch } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ScoreTypeService } from './score-type.service';
import { CreateScoreTypeDto } from './dto/create-score-type.dto';
import { UpdateScoreTypeDto } from './dto/update-score-type.dto';
import { ScoreType } from './entities/score-type.entity';

@ApiTags('score-types')
@Controller('score-types')
export class ScoreTypeController {
  constructor(private readonly scoreTypeService: ScoreTypeService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new score type' })
  @ApiResponse({ status: 201, description: 'The score type has been successfully created.', type: ScoreType })
  create(@Body() createScoreTypeDto: CreateScoreTypeDto): Promise<ScoreType> {
    return this.scoreTypeService.create(createScoreTypeDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all score types' })
  @ApiResponse({ status: 200, description: 'Return all score types.', type: [ScoreType] })
  findAll(): Promise<ScoreType[]> {
    return this.scoreTypeService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a score type by id' })
  @ApiResponse({ status: 200, description: 'Return the score type.', type: ScoreType })
  findOne(@Param('id') id: string): Promise<ScoreType> {
    return this.scoreTypeService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a score type by id' })
  @ApiResponse({ status: 200, description: 'The score type has been successfully updated.', type: ScoreType })
  update(@Param('id') id: string, @Body() updateScoreTypeDto: UpdateScoreTypeDto): Promise<ScoreType> {
    return this.scoreTypeService.update(id, updateScoreTypeDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a score type by id' })
  @ApiResponse({ status: 204, description: 'The score type has been successfully deleted.' })
  async remove(@Param('id') id: string): Promise<void> {
    await this.scoreTypeService.remove(id);
  }
}
