import { IsString, IsNotEmpty, IsOptional, IsArray, IsUrl } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMailDto {
  @ApiProperty({ description: 'ID of the post that the comment belongs to' })
  @IsString()
  @IsNotEmpty()
  to: string;

  @ApiProperty({ description: 'ID of the user who made the comment' })
  @IsString()
  @IsNotEmpty()
  subject: string;

  @ApiProperty({ description: 'Content of the comment' })
  @IsString()
  @IsNotEmpty()  
  html: string;

 
}
