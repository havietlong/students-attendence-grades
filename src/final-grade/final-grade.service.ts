import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Repository } from 'typeorm';
import { FinalGrade } from './entities/final-grade.entity';
import { CreateFinalGradeDto } from './dto/create-final-grade.dto';
import { UpdateFinalGradeDto } from './dto/update-final-grade.dto';

@Injectable()
export class FinalGradesService {
  constructor(
    @InjectRepository(FinalGrade)
    private finalGradeRepository: Repository<FinalGrade>,
  ) {}

  create(createFinalGradeDto: CreateFinalGradeDto): Promise<FinalGrade> {
    const finalGrade = this.finalGradeRepository.create(createFinalGradeDto);
    return this.finalGradeRepository.save(finalGrade);
  }

  findAll(): Promise<FinalGrade[]> {
    return this.finalGradeRepository.find({
      where: { deletedAt: IsNull(), },
      relations: ['student'], // if you want to include student details
    });
  }

  findOne(id: string): Promise<FinalGrade|null> {
    return this.finalGradeRepository.findOne({     
      where: {
        studentId: id,
        deletedAt: IsNull(),
      },
    });
  }

  async update(id: string, updateDto: UpdateFinalGradeDto): Promise<FinalGrade | null> {
  await this.finalGradeRepository.update({ studentId: id }, updateDto);
  return this.findOne(id);
}

  async softRemove(id: string): Promise<void> {
    await this.finalGradeRepository.update({ studentId: id }, { deletedAt: new Date() });
  }
}
