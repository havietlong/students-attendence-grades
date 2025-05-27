import { Module } from '@nestjs/common';
import { LecturersService } from './lecturer.service';
import { LecturersController } from './lecturer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lecturer } from './entities/lecturer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Lecturer])],
  controllers: [LecturersController],
  providers: [LecturersService],
})
export class LecturerModule {}
