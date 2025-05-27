import { Module } from '@nestjs/common';
import { DepartmentsService } from './department.service';
import { DepartmentsController } from './department.controller';
import { Department } from './entities/department.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Department])],
  controllers: [DepartmentsController],
  providers: [DepartmentsService],
})
export class DepartmentModule {}
