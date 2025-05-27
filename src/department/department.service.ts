import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Department } from './entities/department.entity';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';

@Injectable()
export class DepartmentsService {
  constructor(
    @InjectRepository(Department)
    private departmentRepo: Repository<Department>,
  ) {}

  create(dto: CreateDepartmentDto) {
    const department = this.departmentRepo.create(dto);
    return this.departmentRepo.save(department);
  }

  findAll() {
    return this.departmentRepo.find({ relations: ['majors'] });
  }

  async findOne(code: string) {
    const dept = await this.departmentRepo.findOne({
      where: { departmentCode: code },
      relations: ['majors'],
    });
    if (!dept) throw new NotFoundException('Department not found');
    return dept;
  }

  async update(code: string, dto: UpdateDepartmentDto) {
    const dept = await this.findOne(code);
    Object.assign(dept, dto);
    return this.departmentRepo.save(dept);
  }

  async remove(code: string) {
    const dept = await this.findOne(code);
    return this.departmentRepo.remove(dept);
  }
}
