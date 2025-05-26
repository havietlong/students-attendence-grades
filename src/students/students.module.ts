import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { FinalGrade } from 'src/final-grade/entities/final-grade.entity';

@Module({
   imports: [TypeOrmModule.forFeature([Student,FinalGrade])],
  controllers: [StudentsController],
  providers: [StudentsService],
})
export class StudentsModule {}
