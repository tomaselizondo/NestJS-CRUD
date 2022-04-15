import { IsString } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateBrandDTO {
  @IsString()
  readonly tag: string;
}

export class UpdateBrandDTO extends PartialType(CreateBrandDTO) {}
