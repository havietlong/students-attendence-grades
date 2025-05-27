import { ApiProperty } from '@nestjs/swagger';

export class CreateLecturerDto {
  @ApiProperty({ example: 'GV001' })
  lecturerId: string;

  @ApiProperty({ example: 'Nguyen Van A' })
  fullName: string;

  @ApiProperty({ example: '1985-08-15' })
  dateOfBirth: Date;

  @ApiProperty({ example: 'M' })
  gender: string;

  @ApiProperty({ example: '123 Nguyen Trai, Hanoi' })
  address: string;

  @ApiProperty({ example: 'nguyenvana@example.com' })
  email: string;

  @ApiProperty({ example: '0123456789' })
  phoneNumber: string;

  @ApiProperty({ example: 'Tiến sĩ' })
  degree: string;

  @ApiProperty({ example: 'Khoa học máy tính' })
  specialization: string;

  @ApiProperty({ example: 'CNTT' })
  departmentCode: string;
}
