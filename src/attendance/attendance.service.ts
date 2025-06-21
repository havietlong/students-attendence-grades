import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Attendance } from './entities/attendance.entity';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';

@Injectable()
export class AttendanceService {
  constructor(
    @InjectRepository(Attendance)
    private readonly attendanceRepo: Repository<Attendance>,private dataSource: DataSource
  ) { }

  async create(dto: CreateAttendanceDto): Promise<Attendance> {
    const attendance = this.attendanceRepo.create(dto);
    return this.attendanceRepo.save(attendance);
  }

  async findAll(): Promise<Attendance[]> {
    return this.attendanceRepo.find({ relations: ['courseClass', 'student'] });
  }

  async findOne(id: number): Promise<Attendance> {
    const attendance = await this.attendanceRepo.findOne({
      where: { attendanceId: id },
      relations: ['courseClass', 'student'],
    });
    if (!attendance) throw new NotFoundException(`Attendance ID ${id} not found`);
    return attendance;
  }

  async update(id: number, dto: UpdateAttendanceDto): Promise<Attendance> {
    const attendance = await this.findOne(id);
    Object.assign(attendance, dto);
    return this.attendanceRepo.save(attendance);
  }

  async remove(id: number): Promise<void> {
    const result = await this.attendanceRepo.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Attendance ID ${id} not found`);
    }
  }

  async createMany(records: CreateAttendanceDto[]) {
    for (const dto of records) {
      await this.attendanceRepo.query(
        `INSERT INTO "Attendance" 
        ("student_id", "course_class_id", "class_session_id", "date", "status") 
       VALUES ($1, $2, $3, $4, $5)`,
        [dto.studentId, dto.courseClassId, dto.classSessionId, dto.date, dto.status]
      );
    }
  }

 async updateMany(records: any[]) {
  const updates = records.map(record => {
    const { studentId, classSessionId, date, status } = record;

    return this.dataSource.query(
      `
      UPDATE attendance
      SET status = ?
      WHERE student_id = ?
        AND class_session_id = ?
        AND date = ?
      `,
      [status, studentId, classSessionId, date]
    );
  });

  return Promise.all(updates);
  }






}
