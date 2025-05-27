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
import { AverageGradeService } from './average-grade.service';
import { CreateAverageGradeDto } from './dto/create-average-grade.dto';
import { UpdateAverageGradeDto } from './dto/update-average-grade.dto';

@Controller('average-grades')
export class AverageGradeController {
  constructor(private readonly service: AverageGradeService) {}

  @Post()
  create(@Body() createDto: CreateAverageGradeDto) {
    return this.service.create(createDto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: UpdateAverageGradeDto,
  ) {
    return this.service.update(id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
