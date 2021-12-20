import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

import { ValidationErrors } from '@errors/ValidationErrors';

interface IValidateFields {
  dto: any;
  body: any;
  message: string;
}

export async function validateFields({ body, dto, message }: IValidateFields) {
  const data = plainToInstance(dto, body);

  const validationErrors = await validate(data, {
    whitelist: true,
    forbidNonWhitelisted: true,
  });

  if (validationErrors.length > 0) {
    const errors = validationErrors.map(validationError => ({
      field: validationError.property,
      errors: Object.values(validationError.constraints),
    }));

    throw new ValidationErrors(message, errors);
  }
}
