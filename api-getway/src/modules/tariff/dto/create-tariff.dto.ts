import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateTariffDto {
  @ApiProperty({
    type: String,
    example: 'start30',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    type: Number,
    example: 1,
  })
  @IsInt()
  @IsNotEmpty()
  parkId: number;

  @ApiProperty({
    type: Number,
    example: 50000,
  })
  @IsInt()
  @IsNotEmpty()
  price: number;

  @ApiProperty({
    type: Number,
    example: 12,
  })
  @IsInt()
  @IsNotEmpty()
  time: number;
}


// Path: api-getway/src/modules/shot/dto/update-shot.dto.ts
