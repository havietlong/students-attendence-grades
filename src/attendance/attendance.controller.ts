import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AttendanceService } from './attendance.service';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Attendance } from './entities/attendance.entity';

@ApiTags('Attendance')
@Controller('attendance')
export class AttendanceController {
  constructor(private readonly service: AttendanceService) {}

  @Post()
  @ApiOperation({ summary: 'Create attendance record' })
  @ApiResponse({ status: 201, type: Attendance })
  create(@Body() dto: CreateAttendanceDto): Promise<Attendance> {
    return this.service.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'List all attendance records' })
  @ApiResponse({ status: 200, type: [Attendance] })
  findAll(): Promise<Attendance[]> {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get attendance by ID' })
  @ApiResponse({ status: 200, type: Attendance })
  findOne(@Param('id') id: number): Promise<Attendance> {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update attendance by ID' })
  @ApiResponse({ status: 200, type: Attendance })
  update(@Param('id') id: number, @Body() dto: UpdateAttendanceDto): Promise<Attendance> {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete attendance by ID' })
  @ApiResponse({ status: 204, description: 'Deleted' })
  remove(@Param('id') id: number): Promise<void> {
    return this.service.remove(id);
  }
}
