import { plainToClass } from 'class-transformer';
import { ClassType } from 'class-transformer/ClassTransformer';
import { validate } from 'class-validator';
import { Context } from 'koa';
import { get } from 'lodash';
import { ValidationException } from '../exceptions/validation.exception';

const validateMiddleware = (ToValidateClass: ClassType<{}>, target: string) => {
  return async (ctx: Context, next: () => Promise<void>) => {
    const toValidateInstance = plainToClass(ToValidateClass, get(ctx, target), {});
    const errors = await validate(toValidateInstance, {
      validationError: { target: false },
    });
    if (errors.length) {
      throw new ValidationException(null, errors);
    }
    return next();
  };
};

export const validateBody = (ToValidateClass: ClassType<{}>) => validateMiddleware(ToValidateClass, 'body');
export const validateParams = (ToValidateClass: ClassType<{}>) => validateMiddleware(ToValidateClass, 'params');
export const validateQuery = (ToValidateClass: ClassType<{}>) => validateMiddleware(ToValidateClass, 'query');