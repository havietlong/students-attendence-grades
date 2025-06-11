import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClassSessionService } from './class-session.service';
import { ClassSessionController } from './class-session.controller';
import { ClassSession } from './entities/class-session.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ClassSession])],
  controllers: [ClassSessionController],
  providers: [ClassSessionService],
  exports: [ClassSessionService],
})
export class ClassSessionModule {}
