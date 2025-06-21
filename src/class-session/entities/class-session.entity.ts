import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { CourseClass } from 'src/course-class/entities/course-class.entity';
import { Attendance } from 'src/attendance/entities/attendance.entity';

@Entity('class_session')
export class ClassSession {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => CourseClass, (courseClass) => courseClass.sessions, {
    onDelete: 'CASCADE',
    eager: true,
  })
  @JoinColumn({ name: 'ma_lop_hoc_phan' })
  courseClass: CourseClass;

  @Column({ name: 'ma_lop_hoc_phan', type: 'varchar' })
  courseClassId: string;

  @Column({ name: 'ngay_hoc', type: 'date' })
  sessionDate: Date;

  @Column({ name: 'phong_hoc', type: 'varchar', length: 20, nullable: true })
  classroom?: string;

  @Column({ name: 'tiet_bat_dau', type: 'int' })
  startPeriod: number;

  @Column({ name: 'so_tiet', type: 'int' })
  periodCount: number;

  @Column({ default: false })
  isTaught: boolean;

  @Column({ default: false })
  sentAttendance: boolean;

  @Column({ default: false })
  isExamDay: boolean;

  @Column({ default: false })
  isGraded: boolean;

  @OneToMany(() => Attendance, (attendance) => attendance.classSession)
  attendances: Attendance[];
}
