import * as HttpStatus from 'http-status-codes';
import { Context } from 'koa';
import * as Router from 'koa-router';
import validateMiddleware from '../../core/middleware/validate.middleware';
import { CreateUserDto } from './dto/create-user.dto';
import UserService from './users.service';

const registerUser = async (ctx: Context) => {
  const { email, firstName, lastName } = ctx.request.body as CreateUserDto;
  const user = await UserService.createUser({ email, firstName, lastName });
  ctx.status = HttpStatus.OK;
  ctx.body = {
    data: {
      user,
    },
  };
};

export default () => {
  const userController: Router = new Router();
  userController.post('/registration', validateMiddleware(CreateUserDto, 'body'), registerUser);
  return userController.routes();
};