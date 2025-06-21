import { Injectable, NotFoundException } from '@nestjs/common';
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
      where: { userId: id },
      relations: ['department'],
    });
  }

  async update(id: string, updateDto: UpdateLecturerDto) {
    const student = await this.lecturerRepo.findOne({ where: { lecturerId: id } });
    
        if (!student) {
          throw new NotFoundException(`Lecturer with ID ${id} not found`);
        }
    
        const updatedStudent = Object.assign(student, updateDto);
        return await this.lecturerRepo.save(updatedStudent);
  }

  remove(id: string) {
    return this.lecturerRepo.delete(id);
  }
}
