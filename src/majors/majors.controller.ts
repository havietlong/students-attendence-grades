import { Controller, Get, Post, Body, Param, Put, Delete, Patch } from '@nestjs/common';
import { MajorService } from './majors.service';
import { CreateMajorDto } from './dto/create-major.dto';
import { UpdateMajorDto } from './dto/update-major.dto';

@Controller('majors')
export class MajorController {
  constructor(private readonly majorService: MajorService) {}

  @Post()
  create(@Body() createDto: CreateMajorDto) {
    return this.majorService.create(createDto);
  }

  @Get()
  findAll() {
    return this.majorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.majorService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDto: UpdateMajorDto) {
    return this.majorService.update(id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.majorService.remove(id);
  }
}
