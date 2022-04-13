import { IsString } from "class-validator";
import { PartialType } from '@nestjs/mapped-types';

export class CreateCategoryDTO {
  @IsString()
  readonly tag: string;
}

export class UpdateCategoryDTO extends PartialType(CreateCategoryDTO) {};
