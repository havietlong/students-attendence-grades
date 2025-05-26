import { Module } from '@nestjs/common';

import { FinalGradeController } from './final-grade.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FinalGrade } from './entities/final-grade.entity';
import { Student } from 'src/students/entities/student.entity';
import { FinalGradesService } from './final-grade.service';

@Module({
  imports: [TypeOrmModule.forFeature([Student,FinalGrade])],
  controllers: [FinalGradeController],
  providers: [FinalGradesService],
  
})
export class FinalGradeModule {}
