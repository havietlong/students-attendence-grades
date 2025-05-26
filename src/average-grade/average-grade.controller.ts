import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AverageGradeService } from './average-grade.service';
import { CreateAverageGradeDto } from './dto/create-average-grade.dto';
import { UpdateAverageGradeDto } from './dto/update-average-grade.dto';

@Controller('average-grade')
export class AverageGradeController {
  constructor(private readonly averageGradeService: AverageGradeService) {}

  @Post()
  create(@Body() createAverageGradeDto: CreateAverageGradeDto) {
    return this.averageGradeService.create(createAverageGradeDto);
  }

  @Get()
  findAll() {
    return this.averageGradeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.averageGradeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAverageGradeDto: UpdateAverageGradeDto) {
    return this.averageGradeService.update(+id, updateAverageGradeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.averageGradeService.remove(+id);
  }
}
