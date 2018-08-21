import jwt from 'jsonwebtoken';
import { Context } from 'koa';
import * as Router from 'koa-router';
import { config } from '../../config';
import { IEmailBody, IMagicLinkBody } from './auth.interface';
import AuthService from './auth.service';
import emailValidate from './dto/magic-link.dto';
import tokenValidate from './dto/token.dto';

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
  authController.post('/auth/send-magic-link', emailValidate, sendMagicLink);
  authController.post('/auth/verify-magic-link', tokenValidate, verifyMagicLink);
  return authController.routes();
};