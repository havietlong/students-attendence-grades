// src/user-permissions/user-permissions.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserPermission } from './entities/user-permission.entity';
import { Repository } from 'typeorm';
import { CreateUserPermissionDto } from './dto/create-user-permission.dto';

@Injectable()
export class UserPermissionsService {
  constructor(
    @InjectRepository(UserPermission)
    private readonly userPermissionRepo: Repository<UserPermission>,
  ) {}

  create(dto: CreateUserPermissionDto) {
    const userPermission = this.userPermissionRepo.create(dto);
    return this.userPermissionRepo.save(userPermission);
  }

  findAll() {
    return this.userPermissionRepo.find({ relations: ['user', 'permission'] });
  }

  findByUserId(userId: string) {
    return this.userPermissionRepo.find({
      where: { userId },
      relations: ['permission'],
    });
  }

  remove(userId: string, permissionId: string) {
    return this.userPermissionRepo.delete({ userId, permissionId });
  }
}
