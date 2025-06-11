import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { CourseClass } from 'src/course-class/entities/course-class.entity';
import { Student } from 'src/students/entities/student.entity';

@Entity('CourseRegistration')
export class CourseRegistration {
  @PrimaryColumn({ name: 'registration_id', type: 'varchar', length: 10 })
  registrationId: string;

  @Column({ name: 'student_id', type: 'varchar', length: 10 })
  studentId: string;

  @Column({ name: 'class_id', type: 'varchar' })
  classId: string;

  @Column({ name: 'registration_date', type: 'timestamp' })
  registrationDate: Date;

  @Column({ name: 'status', type: 'varchar', length: 20 })
  status: string;

  @ManyToOne(() => Student, (student) => student.courseRegistrations)
  @JoinColumn({ name: 'student_id' })
  student: Student;

  @ManyToOne(() => CourseClass, (courseClass) => courseClass.courseRegistrations)
  @JoinColumn({ name: 'class_id' })
  courseClass: CourseClass;
}
