import { plainToClass } from 'class-transformer';
import { ClassType } from 'class-transformer/ClassTransformer';
import { validate } from 'class-validator';
import { Context } from 'koa';
import { ValidationException } from '../exceptions/validation.exception';

const validateMiddleware = (ToValidateClass: ClassType<{}>, target: string) => {
  return async (ctx: Context, next: () => Promise<void>) => {
    const toValidateInstance = plainToClass(ToValidateClass, ctx.request[target]);
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