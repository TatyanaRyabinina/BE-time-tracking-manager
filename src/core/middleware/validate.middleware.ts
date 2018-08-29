import { Context } from 'koa';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { ValidationException } from '../exceptions/validation.exception';
import { ClassType } from 'class-transformer/ClassTransformer';

const validateMiddleware = (ToValidateClass: ClassType<{}>, target: string) => {
  return async (ctx: Context, next: () => Promise<void>) => {
      const toValidateInstance = plainToClass(ToValidateClass, ctx.request[target])
      const errors = await validate(toValidateInstance, {
        validationError: { target: false },
      });
      if (errors.length) {
        throw new ValidationException(null, errors);
      }
      return next();
  };
};

export default validateMiddleware;