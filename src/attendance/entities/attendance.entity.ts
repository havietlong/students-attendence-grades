import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { CourseClass } from 'src/course-class/entities/course-class.entity';
import { Student } from 'src/students/entities/student.entity';

@Entity('Attendance')
export class Attendance {
  @PrimaryGeneratedColumn({ name: 'attendance_id' })
  attendanceId: number;

  @Column({ name: 'course_class_id', type: 'varchar', length: 10 })
  courseClassId: string;

  @Column({ name: 'student_id', type: 'varchar', length: 10 })
  studentId: string;

  @Column({ name: 'date', type: 'date' })
  date: string;

  @Column({ name: 'status', type: 'varchar', length: 10 })
  status: string;

  @Column({ name: 'note', type: 'varchar', length: 200, nullable: true })
  note?: string;

  @ManyToOne(() => CourseClass, (courseClass) => courseClass.attendances)
  @JoinColumn({ name: 'course_class_id' })
  courseClass: CourseClass;

  @ManyToOne(() => Student, (student) => student.attendances)
  @JoinColumn({ name: 'student_id' })
  student: Student;
}
