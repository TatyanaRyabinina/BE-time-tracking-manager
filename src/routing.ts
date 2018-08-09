import * as jwt from 'koa-jwt';
import * as Router from 'koa-router';
import { config } from './config';
import configureAuthController from './modules/auth/auth.controller';

const jwtMiddleware = jwt({ secret: config.get('jwt:secret') });

const configureGuest = () => {
  const guestRouter = new Router();
  guestRouter.use(configureAuthController());
  return guestRouter.routes();
};

const configurePrivate = () => {
  const privateRouter = new Router();
  privateRouter.use(jwtMiddleware);
  return privateRouter.routes();
};

export const configureAppRouter = () => {
  const appRouter = new Router({ prefix: config.get('app:version') });
  appRouter.use(configureGuest());
  appRouter.use(configurePrivate());
  return appRouter.routes();
};
