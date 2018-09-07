import * as HttpStatus from 'http-status-codes';
import { Context } from 'koa';
import * as Router from 'koa-router';
import { validateBody } from '../../core/middleware/validate.middleware';
import { postDefinition } from '../../swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UserResponse } from './responses/user.response';
import UserService from './users.service';

postDefinition({ path: '/registration', body: CreateUserDto, responses: { [HttpStatus.OK]: UserResponse } });
const registerUser = async (ctx: Context) => {
  const { email, firstName, lastName } = ctx.request.body as CreateUserDto;
  const data = await UserService.createUser({ email, firstName, lastName });
  ctx.status = HttpStatus.OK;
  ctx.body = new UserResponse(data);
};

export default () => {
  const registerController: Router = new Router();
  registerController.post('/registration', validateBody(CreateUserDto), registerUser);
  return registerController.routes();
};