import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';  // Add Swagger decorator

export class LoginDto {
  @ApiProperty({
    description: 'The email of the user',
    example: 'Dave@gmail.com',
  })
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'The password of the user',
    example: 'david',
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}
