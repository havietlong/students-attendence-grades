import {
    Entity,
    PrimaryColumn,
    Column,
    ManyToOne,
    JoinColumn,
    OneToMany,
} from 'typeorm';
import { Department } from 'src/department/entities/department.entity';
import { Class } from 'src/class/entities/class.entity';

@Entity('majors')
export class Major {
    @PrimaryColumn({ name: 'major_code', type: 'varchar', length: 10 })
    majorCode: string;

    @Column({ name: 'major_name', type: 'varchar', length: 100 })
    majorName: string;

    @Column({ name: 'department_code', type: 'varchar', length: 10 })
    departmentCode: string; // This will be the foreign key column

    @Column({ name: 'required_credits', type: 'int' })
    requiredCredits: number;

    // This is the actual relationship
    @ManyToOne(() => Department, (department) => department.majors)
    @JoinColumn({ name: 'department_code', referencedColumnName: 'departmentCode' })
    department: Department;

    @OneToMany(() => Class, (cls) => cls.major)
    classes: Class[];
}
