import { Entity, PrimaryColumn, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Student } from 'src/students/entities/student.entity';
import { Major } from 'src/majors/entities/major.entity';

@Entity('Classes')
export class Class {
    @PrimaryColumn({ name: 'class_id', type: 'varchar', length: 10 })
    classId: string;

    @Column({ name: 'class_name', type: 'varchar', length: 50 })
    className: string;

    @Column({ name: 'majorId', type: 'varchar', length: 10 })
    majorId: string;

    @Column({ name: 'academic_year', type: 'varchar', length: 20 })
    academicYear: string;

    @Column({ name: 'homeroom_teacher', type: 'varchar', length: 100 })
    homeroomTeacher: string;

    @Column({ name: 'class_size', type: 'int' })
    classSize: number;

    @OneToMany(() => Student, (student) => student.class)
    students: Student[];

    @ManyToOne(() => Major, (major) => major.classes)
    @JoinColumn({ name: 'majorId' }) // or whatever your foreign key column is named
    major: Major;
}
