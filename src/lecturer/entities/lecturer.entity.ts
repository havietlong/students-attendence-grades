import {
    Entity,
    Column,
    PrimaryColumn,
    ManyToOne,
    JoinColumn,
    OneToMany,
} from 'typeorm';
import { Department } from 'src/department/entities/department.entity';
import { ScoreDetail } from 'src/score-detail/entities/score-detail.entity';
import { CourseClass } from 'src/course-class/entities/course-class.entity';

@Entity('lecturers')
export class Lecturer {
    @PrimaryColumn({ name: 'lecturer_id', type: 'varchar', length: 10 })
    lecturerId: string;

    @Column({ name: 'full_name', type: 'varchar', length: 100 })
    fullName: string;

    @Column({ name: 'date_of_birth', type: 'date' })
    dateOfBirth: Date;

    @Column({ name: 'gender', type: 'char', length: 1 })
    gender: string; // 'M' or 'F'

    @Column({ name: 'address', type: 'varchar', length: 200 })
    address: string;

    @Column({ name: 'email', type: 'varchar', length: 100 })
    email: string;

    @Column({ name: 'phone_number', type: 'varchar', length: 15 })
    phoneNumber: string;

    @Column({ name: 'degree', type: 'varchar', length: 50 })
    degree: string;

    @Column({ name: 'specialization', type: 'varchar', length: 100 })
    specialization: string;

    @Column({ name: 'department_code', type: 'varchar', length: 10 })
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
}
