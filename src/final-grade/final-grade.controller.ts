import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import {  FinalGradesService } from './final-grade.service';
import { CreateFinalGradeDto } from './dto/create-final-grade.dto';
import { UpdateFinalGradeDto } from './dto/update-final-grade.dto';

@Controller('final-grade')
export class FinalGradeController {
  constructor(private readonly finalGradeService: FinalGradesService) {}

  @Post()
  create(@Body() createFinalGradeDto: CreateFinalGradeDto) {
    return this.finalGradeService.create(createFinalGradeDto);
  }

  @Get()
  findAll() {
    return this.finalGradeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.finalGradeService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFinalGradeDto: UpdateFinalGradeDto) {
    return this.finalGradeService.update(id, updateFinalGradeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.finalGradeService.softRemove(id);
  }
}
