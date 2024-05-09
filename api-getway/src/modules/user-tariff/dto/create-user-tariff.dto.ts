import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsInt, IsNotEmpty } from 'class-validator';

export class CreateUserTariffDto {
  @ApiProperty({
    type: Number,
    example: 1,
  })
  @IsInt()
  @IsNotEmpty()
  userId: number;

  @ApiProperty({
    type: Number,
    example: 1,
  })
  @IsInt()
  @IsNotEmpty()
  tariffId: number;

  @ApiProperty({
    type: Date,
    example: '2024-05-09',
  })
  @IsDateString()
  @IsNotEmpty()
  startedAt: number;

  @ApiProperty({
    type: Date,
    example: '2024-05-10',
  })
  @IsDateString()
  @IsNotEmpty()
  endedAt: number;
}

