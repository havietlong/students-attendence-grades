import { ApiProperty } from '@nestjs/swagger';

export class CreateCourseRegistrationDto {
  @ApiProperty({ example: 'REG123', description: 'Registration ID' })
  registrationId: string;

  @ApiProperty({ example: 'STU001', description: 'Student ID' })
  studentId: string;

  @ApiProperty({ example: 'CLS001', description: 'Class ID' })
  classId: string;

  @ApiProperty({ example: '2025-05-27T10:00:00Z', description: 'Date of registration' })
  registrationDate: Date;

  @ApiProperty({ example: 'Approved', description: 'Status of the registration' })
  status: string;
}
