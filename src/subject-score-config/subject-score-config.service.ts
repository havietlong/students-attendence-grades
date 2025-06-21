import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { SubjectScoreConfig } from './entities/subject-score-config.entity';
import { CreateSubjectScoreConfigDto } from './dto/create-subject-score-config.dto';
import { UpdateSubjectScoreConfigDto } from './dto/update-subject-score-config.dto';
import { CourseClass } from 'src/course-class/entities/course-class.entity';

@Injectable()
export class SubjectScoreConfigService {


  constructor(
    @InjectRepository(SubjectScoreConfig)
    private readonly subjectScoreConfigRepository: Repository<SubjectScoreConfig>,
     private readonly dataSource: DataSource
  ) { }

  async create(createDto: CreateSubjectScoreConfigDto): Promise<SubjectScoreConfig> {
    const config = this.subjectScoreConfigRepository.create(createDto);
    return this.subjectScoreConfigRepository.save(config);
  }

  async createMany(dtos: CreateSubjectScoreConfigDto[]): Promise<SubjectScoreConfig[]> {
    const entities = dtos.map(dto => this.subjectScoreConfigRepository.create({
      subjectCode: dto.subjectCode,
      scoreTypeId: dto.scoreTypeId,
      weightPercent: dto.weightPercent
    }));

    return this.subjectScoreConfigRepository.save(entities);
  }

   async findByCourseClass(courseClassId: string): Promise<SubjectScoreConfig[]> {
  const courseClassRepo = this.dataSource.getRepository(CourseClass); // ✅ pass the entity class

  const courseClass = await courseClassRepo.findOne({
    where: { courseClassId },
    relations: ['subject'],
  });

  if (!courseClass) {
    throw new NotFoundException('Course class not found');
  }

  return this.subjectScoreConfigRepository.find({
    where: { subjectCode: courseClass.subject.subjectCode }, // ✅ nested object access if subject is a relation
    relations: ['scoreType'],
  });
}


  async findAll(): Promise<SubjectScoreConfig[]> {
    return this.subjectScoreConfigRepository.find({ relations: ['scoreType'] });
  }

  async findOne(id: number): Promise<SubjectScoreConfig> {
    const config = await this.subjectScoreConfigRepository.findOne({
      where: { configId: id },
      relations: ['scoreType'],
    });
    if (!config) {
      throw new NotFoundException(`SubjectScoreConfig with id ${id} not found`);
    }
    return config;
  }

  async update(id: number, updateDto: UpdateSubjectScoreConfigDto): Promise<SubjectScoreConfig> {
    const config = await this.findOne(id);
    Object.assign(config, updateDto);
    return this.subjectScoreConfigRepository.save(config);
  }

  async remove(id: number): Promise<void> {
    const result = await this.subjectScoreConfigRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`SubjectScoreConfig with id ${id} not found`);
    }
  }
}
