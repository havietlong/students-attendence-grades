import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ScoreDetailService } from './score-detail.service';
import { CreateScoreDetailDto } from './dto/create-score-detail.dto';
import { UpdateScoreDetailDto } from './dto/update-score-detail.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { ScoreDetail } from './entities/score-detail.entity';

@ApiTags('score-details')
@Controller('score-details')
export class ScoreDetailController {
  constructor(private readonly scoreDetailService: ScoreDetailService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new score detail' })
  @ApiResponse({ status: 201, description: 'Score detail created', type: ScoreDetail })
  create(@Body() createScoreDetailDto: CreateScoreDetailDto) {
    return this.scoreDetailService.create(createScoreDetailDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all score details' })
  @ApiResponse({ status: 200, description: 'List of score details', type: [ScoreDetail] })
  findAll() {
    return this.scoreDetailService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get score detail by id' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Score detail found', type: ScoreDetail })
  @ApiResponse({ status: 404, description: 'Score detail not found' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.scoreDetailService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update score detail by id' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Score detail updated', type: ScoreDetail })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateScoreDetailDto: UpdateScoreDetailDto,
  ) {
    return this.scoreDetailService.update(id, updateScoreDetailDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete score detail by id' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 204, description: 'Score detail deleted' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.scoreDetailService.remove(id);
  }
}
