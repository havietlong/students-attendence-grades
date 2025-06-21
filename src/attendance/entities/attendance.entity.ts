import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { CourseClass } from 'src/course-class/entities/course-class.entity';
import { Student } from 'src/students/entities/student.entity';
import { ClassSession } from 'src/class-session/entities/class-session.entity';

@Entity('Attendance')
export class Attendance {
  @PrimaryGeneratedColumn({ name: 'attendance_id' })
  attendanceId: number;

  



  @Column({ name: 'date', type: 'date' })
  date: string;

  @Column({ name: 'status', type: 'varchar', length: 10 })
  status: string;

  // @Column({ name: 'note', type: 'varchar', length: 200, nullable: true })
  // note?: string;
  @ManyToOne(() => CourseClass, { eager: false })
  @JoinColumn({ name: 'course_class_id' })
  courseClass: CourseClass;

  @ManyToOne(() => ClassSession, session => session.attendances)
  @JoinColumn({ name: 'class_session_id' })
  classSession: ClassSession;

  @ManyToOne(() => Student, (student) => student.attendances)
  @JoinColumn({ name: 'student_id' })
  student: Student;
}
