import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DepartmentsService } from './department.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';

@Controller('departments')
export class DepartmentsController {
  constructor(private readonly departmentsService: DepartmentsService) {}

  @Post()
  create(@Body() dto: CreateDepartmentDto) {
    return this.departmentsService.create(dto);
  }

  @Get()
  findAll() {
    return this.departmentsService.findAll();
  }

  @Get(':code')
  findOne(@Param('code') code: string) {
    return this.departmentsService.findOne(code);
  }

  @Patch(':code')
  update(@Param('code') code: string, @Body() dto: UpdateDepartmentDto) {
    return this.departmentsService.update(code, dto);
  }

  @Delete(':code')
  remove(@Param('code') code: string) {
    return this.departmentsService.remove(code);
  }
}
