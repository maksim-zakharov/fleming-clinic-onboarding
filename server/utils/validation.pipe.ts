import {
  ArgumentMetadata,
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  Logger,
  PipeTransform,
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  logger = new Logger('ValidationPipe');

  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    const object = plainToClass(metatype, value);
    const errors = await validate(object);
    if (errors.length > 0) {
      const errorMessage = getChildrenErrorMessage(errors);
      this.logger.error(errorMessage);
      throw new HttpException(errorMessage, HttpStatus.OK);
    }
    return object;
  }

  private toValidate(metatype: { new(value?: any) }): boolean {
    const types: Array<{ new(value?: any) }> = [
      String,
      Boolean,
      Number,
      Array,
      Object,
    ];
    return !types.includes(metatype);
  }
}

const getChildrenErrorMessage = (errors: ValidationError[]) => {
  if (!errors.length) {
    return '';
  }
  while (errors[0].children.length) {
    errors = errors[0].children;
  }

  return Object.values(errors[0].constraints)[0];
};
