import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { ScoreType } from 'src/score-type/entities/score-type.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Subject } from 'src/subject/entities/subject.entity';

@Entity('subject_score_config')
export class SubjectScoreConfig {
  @ApiProperty({ example: 1 })
  @PrimaryGeneratedColumn({ type: 'int' })
  configId: number;

  @ApiProperty({ example: 'MH001' })
  @Column({ type: 'varchar', length: 10 })
  subjectCode: string;

  @ApiProperty({ example: 'LD01' })
  @Column({ type: 'varchar', length: 10 })
  scoreTypeId: string;

  @ApiProperty({ example: 40.5 })
  @Column({ type: 'float' })
  weightPercent: number;

  @ManyToOne(() => ScoreType, (scoreType) => scoreType.subjectScoreConfigs)
  @JoinColumn({ name: 'scoreTypeId' }) // matches scoreTypeId property
  scoreType: ScoreType;

  @ManyToOne(() => Subject, (subject) => subject.scoreConfigs)
  @JoinColumn({ name: 'subjectCode' })
  subject: Subject;
}
