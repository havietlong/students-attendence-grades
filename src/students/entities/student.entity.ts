import { AverageGrade } from 'src/average-grade/entities/average-grade.entity';
import { FinalGrade } from 'src/final-grade/entities/final-grade.entity';
import { Entity, Column, PrimaryColumn, BeforeInsert, DeleteDateColumn, OneToMany } from 'typeorm';

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

    @Column({ name: 'class_id', length: 20 })
    classId: string;

    @Column({ name: 'study_status', length: 20 })
    studyStatus: string;

    @DeleteDateColumn({ type: 'timestamp', nullable: true })
    deletedAt?: Date;

    @OneToMany(() => FinalGrade, (grade) => grade.student)
    finalGrades: FinalGrade[];

    @OneToMany(() => AverageGrade, avg => avg.student)
    averageGrades: AverageGrade[];


    @BeforeInsert()
    generateStudentId() {
        const randomNumber = Math.floor(Math.random() * 100000);
        const suffix = randomNumber.toString().padStart(5, '0');
        this.studentId = 'BKC' + suffix;
    }

}
