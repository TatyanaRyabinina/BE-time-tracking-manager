import { ValidationError as ClassValidatorValidationError } from 'class-validator';
import * as HttpStatus from 'http-status-codes';
import { ValidationErrorItem } from 'sequelize';

interface IValidationErrorDto {
  value: string;
  property: string;
  constraints?: object;
  children?: object[];
}

type ValidationError = IValidationErrorDto | ValidationErrorItem | ClassValidatorValidationError;

export class ValidationException extends Error {
  public body: object;

  constructor(message: string, errors: ValidationError[] = []) {
    super();
    this.body = {
      statusCode: HttpStatus.UNPROCESSABLE_ENTITY,
      message: message || 'Validation Error',
      errors: this.formatErrors(errors),
    };
  }

  private formatErrors(errors: ValidationError[]): IValidationErrorDto[] | any {
    if (!errors[0]) {
      return null;
    }
    if (errors[0] instanceof ValidationErrorItem) {
      return errors.map<IValidationErrorDto>((error: ValidationErrorItem) => ({
        value: error.value,
        property: error.path,
        constraints: {
          [error.type]: error.message,
        },
      }));
    }

    return errors;
  }
}
