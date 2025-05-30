// final-grade.entity.ts

import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
    DeleteDateColumn,
} from 'typeorm';
import { Student } from 'src/students/entities/student.entity';
import { CourseClass } from 'src/course-class/entities/course-class.entity';

@Entity('final_grades')
export class FinalGrade {
    @PrimaryGeneratedColumn()
    finalGradeId: number;

    @Column()
    studentId: string;

    @Column()
    courseId: string;

    @Column('float')
    grade10Scale: number;

    @Column('float')
    grade4Scale: number;

    @Column()
    letterGrade: string;

    @Column()
    classification: string;

    @Column()
    status: string;

    @Column({ type: 'timestamp' })
    calculatedAt: Date;

    @DeleteDateColumn({ type: 'timestamp', nullable: true })
    deletedAt?: Date;

    @ManyToOne(() => Student, (student) => student.finalGrades)
    @JoinColumn({ name: 'studentId' })
    student: Student;

    @ManyToOne(() => CourseClass, (courseClass) => courseClass.finalGrades)
    @JoinColumn({ name: 'class_id' })
    courseClass: CourseClass;
}
