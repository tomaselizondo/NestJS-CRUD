import { IsString } from "class-validator";
import { PartialType } from '@nestjs/swagger';

export class CreateCategoryDTO {
  @IsString()
  readonly tag: string;
}

export class UpdateCategoryDTO extends PartialType(CreateCategoryDTO) {};
