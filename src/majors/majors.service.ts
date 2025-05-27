import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Major } from './entities/major.entity';
import { CreateMajorDto } from './dto/create-major.dto';
import { UpdateMajorDto } from './dto/update-major.dto';

@Injectable()
export class MajorService {
  constructor(
    @InjectRepository(Major)
    private majorRepository: Repository<Major>,
  ) {}

  async create(createDto: CreateMajorDto): Promise<Major> {
    const major = this.majorRepository.create(createDto);
    return this.majorRepository.save(major);
  }

  async findAll(): Promise<Major[]> {
    return this.majorRepository.find();
  }

  async findOne(id: string): Promise<Major> {
    const major = await this.majorRepository.findOneBy({ majorCode:id });
    if (!major) {
      throw new NotFoundException(`Major with ID ${id} not found`);
    }
    return major;
  }

  async update(id: string, updateDto: UpdateMajorDto): Promise<Major> {
    await this.majorRepository.update(id, updateDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    const result = await this.majorRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Major with ID ${id} not found`);
    }
  }
}
