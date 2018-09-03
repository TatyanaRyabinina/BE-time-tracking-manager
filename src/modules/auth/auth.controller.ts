import * as HttpStatus from 'http-status-codes';
import { Context } from 'koa';
import * as Router from 'koa-router';
import { validateBody } from '../../core/middleware/validate.middleware';
import AuthService from './auth.service';
import { MagicLinkDto } from './dto/magic-link.dto';
import { TokenDto } from './dto/token.dto';

const sendMagicLink = async (ctx: Context) => {
  const { email } = ctx.request.body as MagicLinkDto;
  await AuthService.verifyUser(email);
  ctx.body = {};
};

const verifyMagicLink = async (ctx: Context) => {
  const { email, token } = ctx.request.body as TokenDto;
  const data = await AuthService.verifyToken(email, token);
  ctx.status = HttpStatus.OK;
  ctx.body = { data };
};

export default () => {
  const authController: Router = new Router();
  authController.post('/auth/send-magic-link', validateBody(MagicLinkDto), sendMagicLink);
  authController.post('/auth/verify-magic-link', validateBody(TokenDto), verifyMagicLink);
  return authController.routes();
};