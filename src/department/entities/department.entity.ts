import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { Major } from 'src/majors/entities/major.entity';
import { Lecturer } from 'src/lecturer/entities/lecturer.entity';

@Entity('departments')
export class Department {
  @PrimaryColumn({ name: 'department_code', type: 'varchar', length: 10 })
  departmentCode: string;

  @Column({ name: 'department_name', type: 'varchar', length: 100 })
  departmentName: string;

  @Column({ name: 'head_of_department', type: 'varchar', length: 100 })
  headOfDepartment: string;

  @Column({ name: 'established_date', type: 'date' })
  establishedDate: Date;

  @Column({ name: 'phone_number', type: 'varchar', length: 15 })
  phoneNumber: string;

  @Column({ name: 'email', type: 'varchar', length: 100 })
  email: string;

  @OneToMany(() => Major, (major) => major.department)
  majors: Major[];

  @OneToMany(() => Lecturer, (lecturer) => lecturer.department)
  lecturers: Lecturer[];

}
