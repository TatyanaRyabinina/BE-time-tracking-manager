import { Context } from 'koa';

export default async (ctx: Context, next: () => Promise<void>) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.body.statusCode;
    ctx.body = err.body;
  }
};
