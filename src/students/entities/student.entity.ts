import { Attendance } from 'src/attendance/entities/attendance.entity';
import { AverageGrade } from 'src/average-grade/entities/average-grade.entity';
import { Class } from 'src/class/entities/class.entity';
import { CourseRegistration } from 'src/course-registration/entities/course-registration.entity';
import { FinalGrade } from 'src/final-grade/entities/final-grade.entity';
import { ScoreDetail } from 'src/score-detail/entities/score-detail.entity';
import { Entity, Column, PrimaryColumn, BeforeInsert, DeleteDateColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';

@Entity('students')
export class Student {
    @PrimaryColumn({ name: 'student_id' })
    studentId: string;

    @Column({ name: 'full_name', length: 100 })
    fullName: string;

    @Column({ name: 'date_of_birth', type: 'date' })
    dateOfBirth: Date;

    @Column({ name: 'gender', length: 10 })
    gender: string;

    @Column({ name: 'address', length: 200, nullable: true })
    address?: string;

    @Column({ length: 100, nullable: true })
    email?: string;

    @Column({ name: 'phone_number', length: 20, nullable: true })
    phoneNumber?: string;

    @Column({ name: 'class_id', length: 20, })
    classId: string;

    @Column({ name: 'study_status', length: 20 })
    studyStatus: string;

    @DeleteDateColumn({ type: 'timestamp', nullable: true })
    deletedAt?: Date;

    @OneToMany(() => FinalGrade, (grade) => grade.student)
    finalGrades: FinalGrade[];

    @OneToMany(() => AverageGrade, avg => avg.student)
    averageGrades: AverageGrade[];

    @ManyToOne(() => Class, (cls) => cls.students, { eager: true })
    @JoinColumn({ name: 'class_id' })
    class: Class;

    @OneToMany(() => Attendance, (attendance) => attendance.student)
    attendances: Attendance[];

    @BeforeInsert()
    generateStudentId() {
        const randomNumber = Math.floor(Math.random() * 100000);
        const suffix = randomNumber.toString().padStart(5, '0');
        this.studentId = 'BKC' + suffix;
    }

    @OneToMany(() => CourseRegistration, (registration) => registration.student)
    courseRegistrations: CourseRegistration[];

    @OneToMany(() => ScoreDetail, (scoreDetail) => scoreDetail.student)
    scoreDetails: ScoreDetail[];

}
