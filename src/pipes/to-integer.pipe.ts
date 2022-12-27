import { PipeTransform, BadRequestException } from '@nestjs/common';

export class ToIntegerPipe implements PipeTransform {
  transform(value: string) {
    const intValue = parseInt(value);

    if (isNaN(intValue))
      throw new BadRequestException(
        `Could not convert value: '${value}' into an integer`,
      );

    return intValue;
  }
}
