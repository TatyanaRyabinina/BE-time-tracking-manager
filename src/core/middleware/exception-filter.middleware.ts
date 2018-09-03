import { Context } from 'koa';

export default async (ctx: Context, next: () => Promise<void>) => {
  try {
    await next();
  } catch (err) {
    if (!err.body) {
      ctx.status = 500;
      ctx.body = err;
      return;
    }
    ctx.status = err.body.statusCode;
    ctx.body = err.body;
  }
};
