import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUserDetailDto {
  @ApiProperty({
    type: String,
    example: 'Firdavs',
  })
  @IsString()
  firstname: string;

  @ApiProperty({
    type: String,
    example: 'Yorkulov',
  })
  @IsString()
  lastname: string;

  @ApiProperty({
    type: Number,
  })
  @IsInt()
  @IsOptional()
  avatar: number;

  @ApiProperty({
    type: Number,
    example: 1,
  })
  @IsInt()
  @IsNotEmpty()
  userId: number;
}

// Path: api-getway/src/modules/user-detail/dto/update-user-detail.dto.ts
