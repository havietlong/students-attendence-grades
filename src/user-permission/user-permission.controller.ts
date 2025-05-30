// src/user-permissions/user-permissions.controller.ts
import { Controller, Post, Get, Param, Delete, Body } from '@nestjs/common';
import { UserPermissionsService } from './user-permission.service';
import { CreateUserPermissionDto } from './dto/create-user-permission.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('User Permissions')
@Controller('user-permissions')
export class UserPermissionsController {
  constructor(private readonly service: UserPermissionsService) {}

  @Post()
  @ApiOperation({ summary: 'Assign permission to a user' })
  create(@Body() dto: CreateUserPermissionDto) {
    return this.service.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all user-permission relations' })
  findAll() {
    return this.service.findAll();
  }

  @Get('user/:userId')
  @ApiOperation({ summary: 'Get all permissions of a user' })
  findByUser(@Param('userId') userId: string) {
    return this.service.findByUserId(userId);
  }

  @Delete(':userId/:permissionId')
  @ApiOperation({ summary: 'Remove a specific permission from a user' })
  remove(
    @Param('userId') userId: string,
    @Param('permissionId') permissionId: string,
  ) {
    return this.service.remove(userId, permissionId);
  }
}
