import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subject } from './entities/subject.entity';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';

@Injectable()
export class SubjectService {
  constructor(
    @InjectRepository(Subject)
    private subjectRepository: Repository<Subject>,
  ) {}

  create(createSubjectDto: CreateSubjectDto) {
    const subject = this.subjectRepository.create(createSubjectDto);
    return this.subjectRepository.save(subject);
  }

  findAll() {
    return this.subjectRepository.find({
      relations: ['major', 'prerequisiteSubject'],
    });
  }

  findOne(id: string) {
    return this.subjectRepository.findOne({
      where: { subjectCode: id },
      relations: ['major', 'prerequisiteSubject'],
    });
  }

  update(id: string, updateSubjectDto: UpdateSubjectDto) {
    return this.subjectRepository.update(id, updateSubjectDto);
  }

  remove(id: string) {
    return this.subjectRepository.delete(id);
  }
}
