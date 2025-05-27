import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAverageGradeDto } from './dto/create-average-grade.dto';
import { UpdateAverageGradeDto } from './dto/update-average-grade.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AverageGrade } from './entities/average-grade.entity';
import { IsNull, Repository } from 'typeorm';

@Injectable()
export class AverageGradeService {
  constructor(
    @InjectRepository(AverageGrade)
    private readonly averageGradeRepository: Repository<AverageGrade>,
  ) {}

  async create(createDto: CreateAverageGradeDto): Promise<AverageGrade> {
    const newRecord = this.averageGradeRepository.create(createDto);
    return this.averageGradeRepository.save(newRecord);
  }

  async findAll(): Promise<AverageGrade[]> {
  return this.averageGradeRepository.find({
    where: { deletedAt: IsNull() },
    relations: ['student'],
  });
}

async findOne(id: number): Promise<AverageGrade> {
  const  grade = await this.averageGradeRepository.findOne({
      where: { averageGradeId: id },
    });
  

  if (!grade) {
    throw new NotFoundException(`Average grade with id '${id}' not found`);
  }

  return grade;
}

  async update(id: number, updateDto: UpdateAverageGradeDto): Promise<AverageGrade> {
    await this.averageGradeRepository.update(id, updateDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const grade = await this.findOne(id);
    await this.averageGradeRepository.softRemove(grade);
  }

}
