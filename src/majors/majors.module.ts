import { Module } from '@nestjs/common';
import { MajorService } from './majors.service';
import { MajorController } from './majors.controller';
import { Major } from './entities/major.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Major])],
  controllers: [MajorController],
  providers: [MajorService],
})
export class MajorsModule {}
