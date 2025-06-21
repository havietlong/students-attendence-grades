import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, Length, Matches } from 'class-validator';

export class CreateScoreTypeDto {
  @ApiProperty({ example: 'LD01' })
  @IsString()
  @IsNotEmpty({ message: 'Mã loại điểm không được để trống' })
  @Length(1, 10, { message: 'Mã loại điểm tối đa 10 ký tự' })
  scoreTypeId: string;

  @ApiProperty({ example: 'Midterm Exam' })
  @IsString()
  @IsNotEmpty({ message: 'Tên loại điểm không được để trống' })
  @Length(1, 50, { message: 'Tên loại điểm tối đa 50 ký tự' })
  scoreTypeName: string;
}
