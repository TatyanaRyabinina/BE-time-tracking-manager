import * as jwt from 'koa-jwt';
import * as Router from 'koa-router';
import { config } from './config';
import configureAuthController from './modules/auth/auth.controller';
import configureTimeTrackController from './modules/time-track/time-track.controller';
import configureUserController from './modules/users/users.controller';

const jwtMiddleware = jwt({ secret: config.get('jwt:secret') });

const configureGuest = () => {
  const guestRouter = new Router();
  guestRouter.use(configureAuthController());
  guestRouter.use(configureUserController());
  return guestRouter.routes();
};

const configurePrivate = () => {
  const privateRouter = new Router();
  privateRouter.use(jwtMiddleware);
  privateRouter.use(configureTimeTrackController());
  return privateRouter.routes();
};

export const configureAppRouter = () => {
  const appRouter = new Router({ prefix: config.get('app:version') });
  appRouter.use(configureGuest());
  appRouter.use(configurePrivate());
  return appRouter.routes();
};
