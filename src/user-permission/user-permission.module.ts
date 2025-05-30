import { Module } from '@nestjs/common';
import { UserPermissionsService } from './user-permission.service';
import { UserPermissionsController } from './user-permission.controller';
import { UserPermission } from './entities/user-permission.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
      imports: [TypeOrmModule.forFeature([UserPermission])],
  controllers: [UserPermissionsController],
  providers: [UserPermissionsService],
})
export class UserPermissionModule {}
