import { Context } from 'koa';
import * as Router from 'koa-router';
import validateMiddleware from '../../core/middleware/validate.middleware';
import { IEmailBody, IMagicLinkBody } from './auth.interface';
import AuthService from './auth.service';
import { MagicLinkDto } from './dto/magic-link.dto';
import { TokenDto } from './dto/token.dto';

const sendMagicLink = async (ctx: Context) => {
  const { email } = ctx.request.body as IEmailBody;
  const token = await AuthService.verifyUser(email);
  ctx.status = 200;
  ctx.body = {
    data: {
      magicLinkToken: token,
    },
  };
};

const verifyMagicLink = async (ctx: Context) => {
  const { email, token } = ctx.request.body as IMagicLinkBody;
  const data = await AuthService.verifyToken(email, token);
  ctx.status = 200;
  ctx.body = { data };
};

export default () => {
  const authController: Router = new Router();
  authController.post('/auth/send-magic-link', validateMiddleware(MagicLinkDto, 'body'), sendMagicLink);
  authController.post('/auth/verify-magic-link', validateMiddleware(TokenDto, 'body'), verifyMagicLink);
  return authController.routes();
};