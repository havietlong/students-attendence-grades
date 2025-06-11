import {
    Entity,
    Column,
    PrimaryColumn,
    ManyToOne,
    JoinColumn,
    OneToMany,
    BeforeInsert,
} from 'typeorm';

import { Department } from 'src/department/entities/department.entity';
import { ScoreDetail } from 'src/score-detail/entities/score-detail.entity';
import { CourseClass } from 'src/course-class/entities/course-class.entity';
import { User } from 'src/user/entities/user.entity';

@Entity('lecturers')
export class Lecturer {
    @PrimaryColumn({ name: 'lecturer_id', type: 'varchar', length: 10 })
    lecturerId: string;

    @Column({ name: 'full_name', type: 'varchar', length: 100 })
    fullName: string;

    @Column({ name: 'date_of_birth', type: 'date', nullable: true })
    dateOfBirth: Date;

    @Column({ name: 'gender', type: 'char', length: 1, nullable: true })
    gender: string;

    @Column({ name: 'address', type: 'varchar', length: 200, nullable: true })
    address: string;

    @Column({ name: 'email', type: 'varchar', length: 100, nullable: true })
    email: string;

    @Column({ name: 'phone_number', type: 'varchar', length: 15, nullable: true })
    phoneNumber: string;

    @Column({ name: 'degree', type: 'varchar', length: 50, nullable: true })
    degree: string;

    @Column({ name: 'specialization', type: 'varchar', length: 100, nullable: true })
    specialization: string;

    @Column({ name: 'department_code', type: 'varchar', length: 10, nullable: true })
    departmentCode: string;

    @ManyToOne(() => Department, (department) => department.lecturers, {
        onDelete: 'SET NULL',
        nullable: true,
    })
    @JoinColumn({ name: 'department_code' })
    department: Department;

    @OneToMany(() => ScoreDetail, (scoreDetail) => scoreDetail.lecturer)
    scoreDetails: ScoreDetail[];

    @OneToMany(() => CourseClass, (courseClass) => courseClass.lecturer)
    courseClasses: CourseClass[];

    @BeforeInsert()
    generateLecturerId() {
        const rand = Math.floor(Math.random() * 100000).toString().padStart(5, '0');
        const prefix = this.departmentCode?.substring(0, 3).toUpperCase() || 'GEN';
        this.lecturerId = `${prefix}${rand}`;
    }

    @Column({ nullable: true })
    userId: string;

    @ManyToOne(() => User, { eager: false })
    @JoinColumn({ name: 'userId' })
    user: User;
}
