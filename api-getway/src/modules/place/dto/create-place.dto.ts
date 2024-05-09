import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreatePlaceDto {
  @ApiProperty({
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    type: Number,
  })
  @IsInt()
  @IsNotEmpty()
  layerId: number;

  @ApiProperty({
    type: Number,
  })
  @IsInt()
  @IsOptional()
  price: number;
}

