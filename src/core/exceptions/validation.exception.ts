import * as HttpStatus from 'http-status-codes'
import { ValidationErrorItem } from 'sequelize';
import { ValidationError as ClassValidatorValidationError } from 'class-validator';


interface ValidationErrorDto {
  value: string;
  property: string;
  constraints?: object;
  children?: object[];
}

type ValidationError = ValidationErrorDto | ValidationErrorItem | ClassValidatorValidationError;

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

  private formatErrors(errors: ValidationError[]): ValidationErrorDto[] | any {
    if (!errors[0]) {
      return null;
    }
    if (errors[0] instanceof ValidationErrorItem) {
      return errors.map<ValidationErrorDto>((error: ValidationErrorItem) => ({
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
