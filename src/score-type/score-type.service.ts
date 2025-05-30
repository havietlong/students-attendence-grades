import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ScoreType } from './entities/score-type.entity';
import { CreateScoreTypeDto } from './dto/create-score-type.dto';
import { UpdateScoreTypeDto } from './dto/update-score-type.dto';

@Injectable()
export class ScoreTypeService {
  constructor(
    @InjectRepository(ScoreType)
    private readonly scoreTypeRepository: Repository<ScoreType>,
  ) {}

  async create(createScoreTypeDto: CreateScoreTypeDto): Promise<ScoreType> {
    const scoreType = this.scoreTypeRepository.create(createScoreTypeDto);
    return this.scoreTypeRepository.save(scoreType);
  }

  async findAll(): Promise<ScoreType[]> {
    return this.scoreTypeRepository.find();
  }

  async findOne(id: string): Promise<ScoreType> {
    const scoreType = await this.scoreTypeRepository.findOne({ where: { scoreTypeId: id } });
    if (!scoreType) {
      throw new NotFoundException(`ScoreType with id ${id} not found`);
    }
    return scoreType;
  }

  async update(id: string, updateScoreTypeDto: UpdateScoreTypeDto): Promise<ScoreType> {
    const scoreType = await this.findOne(id);
    Object.assign(scoreType, updateScoreTypeDto);
    return this.scoreTypeRepository.save(scoreType);
  }

  async remove(id: string): Promise<void> {
    const scoreType = await this.findOne(id);
    await this.scoreTypeRepository.remove(scoreType);
  }
}
