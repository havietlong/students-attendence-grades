import { Module } from '@nestjs/common';
import { AverageGradeService } from './average-grade.service';
import { AverageGradeController } from './average-grade.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from 'src/students/entities/student.entity';
import { AverageGrade } from './entities/average-grade.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Student,AverageGrade])],
  controllers: [AverageGradeController],
  providers: [AverageGradeService],
})
export class AverageGradeModule {}
