import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateShotDto {
  @ApiProperty({
    type: Number,
    example: 1,
  })
  @IsInt()
  @IsNotEmpty()
  userId: number;

  @ApiProperty({
    type: Number,
    example: 200000,
  })
  @IsInt()
  @IsOptional()
  amount: number;
}

// Path: api-getway/src/modules/shot/dto/update-shot.dto.ts
