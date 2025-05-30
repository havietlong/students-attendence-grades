import { Entity, PrimaryColumn, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Student } from 'src/students/entities/student.entity';
import { Major } from 'src/majors/entities/major.entity';
import { Subject } from 'src/subject/entities/subject.entity';

@Entity('class')
export class Class {
  @PrimaryColumn({ type: 'varchar', length: 10 })
  classId: string;

  @Column({ type: 'varchar', length: 50 })
  className: string;

  @Column({ type: 'varchar', length: 10 })
  majorId: string;

  @Column({ type: 'varchar', length: 20 })
  academicYear: string;

  @Column({ type: 'varchar', length: 100 })
  homeroomTeacher: string;

  @Column({ type: 'int' })
  classSize: number;

  @OneToMany(() => Student, (student) => student.class)
  students: Student[];

  @ManyToOne(() => Major, (major) => major.classes)
  @JoinColumn({ name: 'majorId' })
  major: Major;

  // @ManyToOne(() => Subject, (subject) => subject.Classes)
  // @JoinColumn({ name: 'subjectCode' })  // You need to add this column to Class entity below
  // subject: Subject;

  // @Column({ type: 'varchar', length: 10 })
  // subjectCode: string;  // add this FK column to connect with Subject
}
