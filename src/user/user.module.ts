import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from 'src/students/entities/student.entity';
import { Lecturer } from 'src/lecturer/entities/lecturer.entity';

@Module({
   imports: [TypeOrmModule.forFeature([User, Student, Lecturer])],
  controllers: [UserController],
  providers: [UserService],
   exports: [UserService],
})
export class UserModule {}
