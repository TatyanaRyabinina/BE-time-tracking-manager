import * as HttpStatus from 'http-status-codes';
import { Context } from 'koa';
import * as Router from 'koa-router';
import { validateBody } from '../../core/middleware/validate.middleware';
import { IUserJwt } from '../auth/interfaces';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import UserService from './users.service';

const getUser = async (ctx: Context) => {
  const userJwt = ctx.request.body as IUserJwt;
  const data = await UserService.findUserByEmail(userJwt.email);
  ctx.body = {
    data,
  };
};

const registerUser = async (ctx: Context) => {
  const { email, firstName, lastName } = ctx.request.body as CreateUserDto;
  const data = await UserService.createUser({ email, firstName, lastName });
  ctx.status = HttpStatus.OK;
  ctx.body = {
    data,
  };
};

const updateUser = async (ctx: Context) => {
  const profileData = ctx.request.body as UpdateUserDto;
  const user = ctx.state.user as IUserJwt;
  const data = await UserService.updateUserProfile(profileData, user);
  ctx.body = {
    data,
  };
};

export default () => {
  const userController: Router = new Router();
  userController.post('/registration', validateBody(CreateUserDto), registerUser);
  userController.get('/user', getUser);
  userController.put('/user', validateBody(UpdateUserDto), updateUser);
  return userController.routes();
};