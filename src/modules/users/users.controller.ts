import * as Router from 'koa-router';

export default () => {
  const userController: Router = new Router();

  return userController.routes();
};