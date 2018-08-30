import { Context } from 'koa';
import * as Router from 'koa-router';
import validateMiddleware from '../../core/middleware/validate.middleware';
import { CreateUserDto } from './dto/create-user.dto';

const some = (ctx: Context) => {
  ctx.body = { hello: 'world' };
};

export default () => {
  const userController: Router = new Router();
  userController.get('/test', validateMiddleware(CreateUserDto, 'body'), some);
  return userController.routes();
};