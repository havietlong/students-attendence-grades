import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';
import { CourseClass } from 'src/course-class/entities/course-class.entity';
import { Student } from 'src/students/entities/student.entity';

@Entity('CourseRegistration')
export class CourseRegistration {
  @PrimaryGeneratedColumn("uuid")
  registrationId: string;

  @Column({ name: 'student_id', type: 'varchar', length: 10 })
  studentId: string;

  @Column({ name: 'class_id', type: 'varchar' })
  classId: string;

  @Column({ name: 'registration_date', type: 'timestamp' })
  registrationDate: Date;



  @ManyToOne(() => Student, (student) => student.courseRegistrations,{eager:true})
  @JoinColumn({ name: 'student_id' })
  student: Student;

  @ManyToOne(() => CourseClass, (courseClass) => courseClass.courseRegistrations,{eager:true})
  @JoinColumn({ name: 'class_id' })
  courseClass: CourseClass;
}
