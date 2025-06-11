import { ApiProperty } from '@nestjs/swagger';

export class SwapClassSessionDto {
  @ApiProperty({ example: 1, description: 'ID of the first class session' })
  sessionId1: number;

  @ApiProperty({ example: 2, description: 'ID of the second class session' })
  sessionId2: number;
}
