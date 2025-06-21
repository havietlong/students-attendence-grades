import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Not, Repository } from 'typeorm';
import { ClassSession } from './entities/class-session.entity';
import { CreateClassSessionDto } from './dto/create-class-session.dto';
import { UpdateClassSessionDto } from './dto/update-class-session.dto';


@Injectable()
export class ClassSessionService {
  constructor(
    @InjectRepository(ClassSession)
    private readonly classSessionRepo: Repository<ClassSession>,
  ) { }

  async create(createDto: CreateClassSessionDto): Promise<ClassSession> {
    const session = this.classSessionRepo.create(createDto);
    return this.classSessionRepo.save(session);
  }

  async createMany(sessions: CreateClassSessionDto[]) {
    const entities = this.classSessionRepo.create(sessions);
    return await this.classSessionRepo.save(entities);
  }

  async findAll(): Promise < ClassSession[] > {
  return this.classSessionRepo.find();
}

  async findOne(id: number): Promise < ClassSession > {
  const session = await this.classSessionRepo.findOneBy({ id });
  if(!session) {
    throw new NotFoundException(`ClassSession with id ${id} not found`);
  }
    return session;
}

async findByCourseClassId(courseClassId: string): Promise<ClassSession[]> {
  return this.classSessionRepo.find({
    where: { courseClassId },
    order: { sessionDate: 'ASC', startPeriod: 'ASC' },
  });
}


  async update(id: number, updateDto: UpdateClassSessionDto): Promise < ClassSession > {
  const session = await this.findOne(id);
  Object.assign(session, updateDto);
  return this.classSessionRepo.save(session);
}

  async remove(id: number): Promise < void> {
  const result = await this.classSessionRepo.delete(id);
  if(result.affected === 0) {
  throw new NotFoundException(`ClassSession with id ${id} not found`);
}
  }

  async swapPeriods(sessionId1: number, sessionId2: number): Promise < void> {
  const session1 = await this.classSessionRepo.findOneBy({ id: sessionId1 });
  const session2 = await this.classSessionRepo.findOneBy({ id: sessionId2 });

  if(!session1 || !session2) {
  throw new NotFoundException('One or both class sessions not found');
}

if (session1.sessionDate.getTime() !== session2.sessionDate.getTime()) {
  throw new BadRequestException('Sessions must be on the same date');
}

// Temporarily swap startPeriods (and classrooms if needed)
const tempStartPeriod = session1.startPeriod;
const tempClassroom = session1.classroom;

session1.startPeriod = session2.startPeriod;
session1.classroom = session2.classroom;

session2.startPeriod = tempStartPeriod;
session2.classroom = tempClassroom;

// Validate no conflicts for session1 and session2 with other sessions
await this.validateNoConflicts(session1);
await this.validateNoConflicts(session2);

// If all good, save the updated sessions
await this.classSessionRepo.save([session1, session2]);
  }

   private async validateNoConflicts(session: ClassSession): Promise < void> {
  // Find all sessions in the same classroom and date excluding current session
  const conflictingSessions = await this.classSessionRepo.find({
    where: {
      classroom: session.classroom,
      sessionDate: session.sessionDate,
      id: Not(session.id),
    },
  });

  // Check if any session overlaps with the current session's new period
  for(const otherSession of conflictingSessions) {
    if (this.periodsOverlap(session, otherSession)) {
      throw new BadRequestException(
        `Session conflicts with another session (id: ${otherSession.id}) in classroom ${session.classroom} at the same time.`,
      );
    }
  }
}

  private periodsOverlap(s1: ClassSession, s2: ClassSession): boolean {
  const s1Start = s1.startPeriod;
  const s1End = s1Start + s1.periodCount - 1;

  const s2Start = s2.startPeriod;
  const s2End = s2Start + s2.periodCount - 1;

  // Check if s1 period overlaps s2 period
  return !(s1End < s2Start || s1Start > s2End);
}

}
