import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lecturer } from './entities/lecturer.entity';
import { CreateLecturerDto } from './dto/create-lecturer.dto';
import { UpdateLecturerDto } from './dto/update-lecturer.dto';

@Injectable()
export class LecturersService {
  constructor(
    @InjectRepository(Lecturer)
    private readonly lecturerRepo: Repository<Lecturer>,
  ) {}

  create(createLecturerDto: CreateLecturerDto) {
    return this.lecturerRepo.save(createLecturerDto);
  }

  findAll() {
    return this.lecturerRepo.find({ relations: ['department'] });
  }

  findOne(id: string) {
    return this.lecturerRepo.findOne({
      where: { lecturerId: id },
      relations: ['department'],
    });
  }

  update(id: string, updateDto: UpdateLecturerDto) {
    return this.lecturerRepo.update(id, updateDto);
  }

  remove(id: string) {
    return this.lecturerRepo.delete(id);
  }
}
