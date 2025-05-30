import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ScoreDetail } from './entities/score-detail.entity';
import { CreateScoreDetailDto } from './dto/create-score-detail.dto';
import { UpdateScoreDetailDto } from './dto/update-score-detail.dto';

@Injectable()
export class ScoreDetailService {
  constructor(
    @InjectRepository(ScoreDetail)
    private readonly scoreDetailRepository: Repository<ScoreDetail>,
  ) {}

  async create(createScoreDetailDto: CreateScoreDetailDto): Promise<ScoreDetail> {
  const { scoreType, studentId, enteredBy, ...rest } = createScoreDetailDto;

  const scoreDetail = this.scoreDetailRepository.create({
    ...rest,
    scoreType: { scoreTypeId: scoreType },  // assuming 'scoreType' is the ID
    student: { studentId },                 // assuming 'studentId' is from DTO
    lecturer: { lecturerId: enteredBy },    // assuming 'enteredBy' is a lecturer ID
  });

  return this.scoreDetailRepository.save(scoreDetail);
}


  async findAll(): Promise<ScoreDetail[]> {
    return this.scoreDetailRepository.find({ relations: ['lecturer'] });
  }

  async findOne(id: number): Promise<ScoreDetail> {
    const scoreDetail = await this.scoreDetailRepository.findOne({
      where: { scoreDetailId: id },
      relations: ['lecturer'],
    });
    if (!scoreDetail) {
      throw new NotFoundException(`ScoreDetail with id ${id} not found`);
    }
    return scoreDetail;
  }

  async update(id: number, updateScoreDetailDto: UpdateScoreDetailDto): Promise<ScoreDetail> {
    const scoreDetail = await this.findOne(id);
    Object.assign(scoreDetail, updateScoreDetailDto);
    return this.scoreDetailRepository.save(scoreDetail);
  }

  async remove(id: number): Promise<void> {
    const scoreDetail = await this.findOne(id);
    await this.scoreDetailRepository.remove(scoreDetail);
  }
}
