import { Context, Request } from 'koa';
import * as Yup from 'yup';
import ValidationException from '../exceptions/bad-request.exception';

const validateMiddleware = (validationSchema: Yup.ObjectSchema<{}>, target: string) => {
  return (ctx: Context, next: () => Promise<void>) => {
    try {
      validationSchema.validateSync(ctx.request[target]);
      return next();
    } catch (err) {
      throw new ValidationException(err);
    }
  };
};

export default validateMiddleware;