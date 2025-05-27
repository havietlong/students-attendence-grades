import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { Student } from 'src/students/entities/student.entity';

@Entity('average_grades')
export class AverageGrade {
  @PrimaryGeneratedColumn({ name: 'average_grade_id' })
  averageGradeId: number;

  @Column({ name: 'studentId', type: 'varchar', length: 10 })
  studentId: string;

  @ManyToOne(() => Student, (student) => student.averageGrades, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'studentId' })
  student: Student;

  @Column({ type: 'int' })
  semester: number;

  @Column({ name: 'academic_year', type: 'varchar', length: 10 })
  academicYear: string;

  @Column({ name: 'semester_gpa_scale_10', type: 'float', nullable: true })
  semesterGpaScale10: number;

  @Column({ name: 'semester_gpa_scale_4', type: 'float', nullable: true })
  semesterGpaScale4: number;

  @Column({ name: 'cumulative_gpa_scale_10', type: 'float', nullable: true })
  cumulativeGpaScale10: number;

  @Column({ name: 'cumulative_gpa_scale_4', type: 'float', nullable: true })
  cumulativeGpaScale4: number;

  @Column({ name: 'academic_classification', type: 'varchar', length: 20, nullable: true })
  academicClassification: string;

  @Column({ name: 'credits_earned', type: 'int', nullable: true })
  creditsEarned: number;

  @Column({ name: 'credits_accumulated', type: 'int', nullable: true })
  creditsAccumulated: number;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt?: Date;

  @CreateDateColumn({ name: 'calculated_at' })
  calculatedAt: Date;

  
}
