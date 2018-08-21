import { Context } from 'koa';
import * as Yup from 'yup';
import ValidationException from '../exceptions/bad-request.exception';
/*
const enum ValidationTarget {
  body,
  params,
  query
}*/

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