import { Module } from '@nestjs/common';
import { CourseClassService } from './course-class.service';
import { CourseClassController } from './course-class.controller';
import { CourseClass } from './entities/course-class.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CourseClass])],
  controllers: [CourseClassController],
  providers: [CourseClassService],
})
export class CourseClassModule {}
