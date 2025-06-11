import {
    Entity,
    PrimaryColumn,
    Column,
    ManyToOne,
    OneToMany,
    JoinColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Major } from 'src/majors/entities/major.entity';
import { SubjectScoreConfig } from 'src/subject-score-config/entities/subject-score-config.entity';
import { Class } from 'src/class/entities/class.entity';
import { CourseClass } from 'src/course-class/entities/course-class.entity';

@Entity('subject')
export class Subject {
    @ApiProperty({ example: 'MH001',nullable:true })
    @PrimaryColumn({ type: 'varchar', length: 10 })
    subjectCode: string;

    @ApiProperty({ example: 'Introduction to Programming' })
    @Column({ type: 'varchar', length: 100 })
    subjectName: string;

    @ApiProperty({ example: 3 })
    @Column({ type: 'int' })
    credit: number;

    @ApiProperty({ example: 30 })
    @Column({ type: 'int' })
    lectureHours: number;

    @ApiProperty({ example: 15 })
    @Column({ type: 'int' })
    practiceHours: number;

    @ApiProperty({ example: 'IT01' })
    @Column({ type: 'varchar', length: 10, nullable: true })
    majorCode: string;

    @ApiProperty({ example: 'MH000' })
    @Column({ type: 'varchar', length: 10, nullable: true })
    prerequisiteSubjectCode: string;

    // 🎓 Relationship: Subject belongs to a Major (nganhHoc)
    @ManyToOne(() => Major, (major) => major.subjects, { nullable: true })
    @JoinColumn({ name: 'majorCode' })
    major?: Major;

    // 🔄 Relationship: Subject may have a prerequisite subject (self-reference)
    @ManyToOne(() => Subject, (subject) => subject.nextSubjects, { nullable: true })
    @JoinColumn({ name: 'prerequisiteSubjectCode' })
    prerequisiteSubject?: Subject;

    // 🔁 Reverse of self-reference: list of subjects that have this one as a prerequisite
    @OneToMany(() => Subject, (subject) => subject.prerequisiteSubject)
    nextSubjects: Subject[];

    // 🧮 Relationship: Subject has many score configurations
    @OneToMany(() => SubjectScoreConfig, (config) => config.subject)
    scoreConfigs: SubjectScoreConfig[];

    // // 🧑‍🏫 Relationship: Subject has many course classes (lophocphan)
    // @OneToMany(() => Class, (classEntity) => classEntity.subject)
    // Classes: Class[];

    @OneToMany(() => CourseClass, (courseClass) => courseClass.subject)
    courseClasses: CourseClass[];


}
