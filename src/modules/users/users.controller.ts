import * as HttpStatus from 'http-status-codes';
import { Context } from 'koa';
import * as Router from 'koa-router';
import { validateBody } from '../../core/middleware/validate.middleware';
import { getDefinition, putDefinition } from '../../swagger';
import { IUserJwt } from '../auth/interfaces';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserResponse } from './responses/user.response';
import UserService from './users.service';

const path: string = '/user';

getDefinition({ path, responses: { [HttpStatus.OK]: UserResponse } });
const getUser = async (ctx: Context) => {
  const userJwt = ctx.state.user as IUserJwt;
  const data = await UserService.findUserBy({ id: userJwt.id });
  ctx.body = new UserResponse(data);
};

putDefinition({ path, body: UpdateUserDto, responses: { [HttpStatus.OK]: UserResponse } });
const updateUser = async (ctx: Context) => {
  const profileData = ctx.request.body as UpdateUserDto;
  const user = ctx.state.user as IUserJwt;
  const data = await UserService.updateUserProfile(profileData, user);
  ctx.body = new UserResponse(data);
};

export default () => {
  const userController: Router = new Router();
  userController.get(path, getUser);
  userController.put(path, validateBody(UpdateUserDto), updateUser);
  return userController.routes();
};