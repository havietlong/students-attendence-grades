import { IsString, IsDateString, Length, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDepartmentDto {
  @ApiProperty({ example: 'CS01' })
  @IsString()
  @Length(1, 10)
  departmentCode: string;

  @ApiProperty({ example: 'Computer Science' })
  @IsString()
  @Length(1, 100)
  departmentName: string;

  @ApiProperty({ example: 'Dr. John Doe' })
  @IsString()
  @Length(1, 100)
  headOfDepartment: string;

  @ApiProperty({ example: '2000-01-01' })
  @IsDateString()
  establishedDate: string;

  @ApiProperty({ example: '0123456789' })
  @IsString()
  @Length(1, 15)
  phoneNumber: string;

  @ApiProperty({ example: 'cs@university.edu' })
  @IsEmail()
  email: string;
}
