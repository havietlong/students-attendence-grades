import {
    Entity,
    PrimaryColumn,
    Column,
    ManyToOne,
    JoinColumn,
    OneToMany,
} from 'typeorm';
import { Subject } from 'src/subject/entities/subject.entity';
import { Lecturer } from 'src/lecturer/entities/lecturer.entity';
import { Attendance } from 'src/attendance/entities/attendance.entity';
import { CourseRegistration } from 'src/course-registration/entities/course-registration.entity';
import { FinalGrade } from 'src/final-grade/entities/final-grade.entity';
import { ScoreDetail } from 'src/score-detail/entities/score-detail.entity';

@Entity('course_class')
export class CourseClass {
    @PrimaryColumn({ name: 'course_class_id', type: 'varchar', length: 10 })
    courseClassId: string;

    @Column({ name: 'subject_code', type: 'varchar', length: 10 })
    subjectCode: string;

    @Column({ name: 'lecturer_id', type: 'varchar', length: 10, nullable: true })
    lecturerId: string | null;

    @Column({ name: 'semester', type: 'int' })
    semester: number;

    @Column({ name: 'academic_year', type: 'varchar', length: 10 })
    academicYear: string;

    @Column({ name: 'classroom', type: 'varchar', length: 20 })
    classroom: string;

    @Column({ name: 'day_of_week', type: 'int' })
    dayOfWeek: number;

    @Column({ name: 'start_period', type: 'int' })
    startPeriod: number;

    @Column({ name: 'period_count', type: 'int' })
    periodCount: number;

    @Column({ name: 'start_date', type: 'date' })
    startDate: Date;

    @Column({ name: 'end_date', type: 'date' })
    endDate: Date;

    @Column({ name: 'max_capacity', type: 'int' })
    maxCapacity: number;

    @OneToMany(() => Attendance, (attendance) => attendance.courseClass)
    attendances: Attendance[];

    @ManyToOne(() => Subject, (subject) => subject.courseClasses, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'subject_code' })
    subject: Subject;

    @ManyToOne(() => Lecturer, (lecturer) => lecturer.courseClasses, { nullable: true, onDelete: 'SET NULL' })
    @JoinColumn({ name: 'lecturer_id' })
    lecturer: Lecturer | null;

    @OneToMany(() => CourseRegistration, (registration) => registration.courseClass)
    courseRegistrations: CourseRegistration[];

    @OneToMany(() => FinalGrade, (finalGrade) => finalGrade.courseClass)
    finalGrades: FinalGrade[];

    @OneToMany(() => ScoreDetail, scoreDetail => scoreDetail.classCode)
    scoreDetails: ScoreDetail[];


}
