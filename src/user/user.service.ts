// src/users/user.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  async create(dto: CreateUserDto): Promise<User> {
    const user = this.userRepo.create(dto);
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
}
