// src/users/user.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import { Student } from 'src/students/entities/student.entity';
import { Lecturer } from 'src/lecturer/entities/lecturer.entity';
import { CreateLecturerDto } from 'src/lecturer/dto/create-lecturer.dto';
import { CreateStudentDto } from 'src/students/dto/create-student.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    @InjectRepository(Student) private studentRepo: Repository<Student>,
    @InjectRepository(Lecturer) private lecturerRepo: Repository<Lecturer>,
  ) { }




  async create(
    userDto: CreateUserDto,
    profileDto?: CreateStudentDto | CreateLecturerDto
  ): Promise<User> {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(userDto.password, salt);

    const user = this.userRepo.create({
      ...userDto,
      password: hashedPassword,
      createdAt: new Date(),
    });

    const savedUser = await this.userRepo.save(user);
    console.log(savedUser.role);

    if (savedUser.role === 'student') {
      const student = this.studentRepo.create({
        fullName: savedUser.fullName,
        studyStatus: 'active',
        userId: savedUser.userId
      });

      await this.studentRepo.save(student);

      console.log('Student profile created');
    }

    if (savedUser.role === 'lecturer') {
      const lecturer = this.lecturerRepo.create({
        fullName: savedUser.fullName,
         userId: savedUser.userId
      });
      await this.lecturerRepo.save(lecturer);
      console.log("Lecturer profile created");
    }

    return savedUser;
  }

  

  async updateUserAvatar(userId: string, imagePath: string): Promise<User> {
    const user = await this.userRepo.findOne({ where: { userId } });
    if (!user) throw new Error('User not found');
    user.image = imagePath;
    return this.userRepo.save(user);
  }


  async findAll(): Promise<User[]> {
    return this.userRepo.find({ relations: ['permissions'] });
  }

  async findOne(id: string): Promise<User | null> {
    return this.userRepo.findOne({
      where: { userId: id },
      relations: ['permissions'],
    });
  }

  async update(id: string, dto: UpdateUserDto): Promise<void> {
    await this.userRepo.update({ userId: id }, dto);
  }

  async remove(id: string): Promise<void> {
    await this.userRepo.delete({ userId: id });
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.userRepo.findOne({ where: { email } });
  }
}
