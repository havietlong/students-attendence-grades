import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubjectScoreConfig } from './entities/subject-score-config.entity';
import { CreateSubjectScoreConfigDto } from './dto/create-subject-score-config.dto';
import { UpdateSubjectScoreConfigDto } from './dto/update-subject-score-config.dto';

@Injectable()
export class SubjectScoreConfigService {
  constructor(
    @InjectRepository(SubjectScoreConfig)
    private readonly subjectScoreConfigRepository: Repository<SubjectScoreConfig>,
  ) {}

  async create(createDto: CreateSubjectScoreConfigDto): Promise<SubjectScoreConfig> {
    const config = this.subjectScoreConfigRepository.create(createDto);
    return this.subjectScoreConfigRepository.save(config);
  }

  async findAll(): Promise<SubjectScoreConfig[]> {
    return this.subjectScoreConfigRepository.find({ relations: ['scoreType'] });
  }

  async findOne(id: number): Promise<SubjectScoreConfig> {
    const config = await this.subjectScoreConfigRepository.findOne({
      where: { configId: id },
      relations: ['scoreType'],
    });
    if (!config) {
      throw new NotFoundException(`SubjectScoreConfig with id ${id} not found`);
    }
    return config;
  }

  async update(id: number, updateDto: UpdateSubjectScoreConfigDto): Promise<SubjectScoreConfig> {
    const config = await this.findOne(id);
    Object.assign(config, updateDto);
    return this.subjectScoreConfigRepository.save(config);
  }

  async remove(id: number): Promise<void> {
    const result = await this.subjectScoreConfigRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`SubjectScoreConfig with id ${id} not found`);
    }
  }
}
