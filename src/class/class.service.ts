import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Class } from './entities/class.entity';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';

@Injectable()
export class ClassService {
  constructor(
    @InjectRepository(Class)
    private classRepository: Repository<Class>,
  ) {}

  async create(createClassDto: CreateClassDto): Promise<Class> {
    const newClass = this.classRepository.create(createClassDto);
    return this.classRepository.save(newClass);
  }

  async findAll(): Promise<Class[]> {
    return this.classRepository.find();
  }

  async findOne(id: string): Promise<Class> {
    const found = await this.classRepository.findOne({ where: { classId: id } });
    if (!found) {
      throw new NotFoundException(`Class with ID ${id} not found`);
    }
    return found;
  }

  async update(id: string, updateDto: UpdateClassDto): Promise<Class> {
    const classToUpdate = await this.findOne(id);
    const updated = this.classRepository.merge(classToUpdate, updateDto);
    return this.classRepository.save(updated);
  }

  async remove(id: string): Promise<void> {
    const toDelete = await this.findOne(id);
    await this.classRepository.remove(toDelete);
  }
}
