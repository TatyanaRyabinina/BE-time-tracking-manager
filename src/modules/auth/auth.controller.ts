import { Context } from 'koa';
import * as Router from 'koa-router';

const auth = (ctx: Context) => {
  ctx.body = {
    hello: 'world',
  };
};

export default () => {
  const authController: Router = new Router();
  authController.use('/auth', auth);
  return authController.routes();
};