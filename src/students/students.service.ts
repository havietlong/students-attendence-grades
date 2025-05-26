import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';
import { IsNull, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class StudentsService {

  constructor(
    @InjectRepository(Student) private readonly studentsRepository: Repository<Student>) { }

  async create(createStudentDto: CreateStudentDto) {
    const student = this.studentsRepository.create(createStudentDto);
    student.studentId = await this.generateUniqueStudentId();
    return this.studentsRepository.save(student);
  }

  async findAll(): Promise<Student[]> {
    return this.studentsRepository.find({
      where: {
        deletedAt: IsNull(),
      },
    });
  }

  async findOne(id: string): Promise<Student|null> {
    return this.studentsRepository.findOne({
      where: {
        studentId: id,
        deletedAt: IsNull(),
      },
    });
  }

  async remove(id: string): Promise<void> {
    const student = await this.findOne(id);
    if (!student) throw new NotFoundException(`Student ${id} not found`);
    await this.studentsRepository.softRemove(student);
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return `This action updates a #${id} student`;
  }

  async generateUniqueStudentId(): Promise<string> {
    let unique = false;
    let studentId = '';

    while (!unique) {
      const randomNumber = Math.floor(Math.random() * 100000);
      const suffix = randomNumber.toString().padStart(5, '0');
      studentId = 'BKC' + suffix;

      const existing = await this.studentsRepository.findOneBy({ studentId });
      if (!existing) {
        unique = true;
      }
    }

    return studentId;
  }
}
