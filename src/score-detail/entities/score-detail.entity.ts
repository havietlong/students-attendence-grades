import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Lecturer } from 'src/lecturer/entities/lecturer.entity';
import { ScoreType } from 'src/score-type/entities/score-type.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Student } from 'src/students/entities/student.entity';
import { CourseClass } from 'src/course-class/entities/course-class.entity';

@Entity('chitietdiem')
export class ScoreDetail {
  @ApiProperty({ example: 1 })
  @PrimaryGeneratedColumn({ type: 'int' })
  scoreDetailId: number;

  @ApiProperty({ example: 'SV001' })
  @Column({ type: 'varchar', length: 10 })
  studentId: string;

  @ManyToOne(() => Student, (student) => student.scoreDetails, {
    nullable: false,
    onDelete: 'CASCADE', // or 'SET NULL' depending on your logic
  })
  @JoinColumn({ name: 'studentId' })
  @ApiProperty({ type: () => Student })
  student: Student;

  @ApiProperty({ example: 'LHP001' })
  @Column({ type: 'varchar', length: 10 })
  classCode: string;

  @ManyToOne(() => ScoreType, { nullable: false })
  @JoinColumn({ name: 'scoreType' }) // This sets the foreign key column
  @ApiProperty({ type: () => ScoreType })
  scoreType: ScoreType;

  @ApiProperty({ example: 8.5 })
  @Column({ type: 'float' })
  score: number;

  @ApiProperty({ example: '2024-09-01T10:00:00Z' })
  @Column({ type: 'timestamp' })
  entryDate: Date;

  @Column({ type: 'varchar', length: 10, nullable: true })
  enteredBy: string;

  @ManyToOne(() => Lecturer, (lecturer) => lecturer.scoreDetails, {
    onDelete: 'SET NULL',
    nullable: true,
  })
  @JoinColumn({ name: 'enteredBy' })
  @ApiProperty({ type: () => Lecturer, nullable: true })
  lecturer: Lecturer;

  @ManyToOne(() => CourseClass, (courseClass) => courseClass.courseClassId)
  @JoinColumn({ name: 'classCode' })
  courseClass: CourseClass;
}
