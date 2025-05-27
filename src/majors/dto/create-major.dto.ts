import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsInt, IsOptional, Length } from 'class-validator';

export class CreateMajorDto {
  @ApiProperty({ description: 'Major code', maxLength: 10 })
  @IsString()
  @Length(1, 10)
  majorCode: string;

  @ApiProperty({ description: 'Major name', maxLength: 100 })
  @IsString()
  @Length(1, 100)
  majorName: string;

  @ApiProperty({ description: 'Department code', maxLength: 10 })
  @IsString()
  @Length(1, 10)
  departmentCode: string;

  @ApiProperty({ description: 'Required credits to graduate' })
  @IsInt()
  requiredCredits: number;
}
