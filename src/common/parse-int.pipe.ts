import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    const val = parseInt(value);
    if (isNaN(val)) {
      throw new BadRequestException('The parametter has to be an integer');
    }
    return val;
  }
}
