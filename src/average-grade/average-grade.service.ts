import { Injectable } from '@nestjs/common';
import { CreateAverageGradeDto } from './dto/create-average-grade.dto';
import { UpdateAverageGradeDto } from './dto/update-average-grade.dto';

@Injectable()
export class AverageGradeService {
  create(createAverageGradeDto: CreateAverageGradeDto) {
    return 'This action adds a new averageGrade';
  }

  findAll() {
    return `This action returns all averageGrade`;
  }

  findOne(id: number) {
    return `This action returns a #${id} averageGrade`;
  }

  update(id: number, updateAverageGradeDto: UpdateAverageGradeDto) {
    return `This action updates a #${id} averageGrade`;
  }

  remove(id: number) {
    return `This action removes a #${id} averageGrade`;
  }
}
