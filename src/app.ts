import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as path from 'path';
import * as swagger from 'swagger-injector';
import { config } from './config';
import exceptionFilter from './core/middleware/exception-filter.middleware';
import dbConnection from './db-connection';
import { configureAppRouter } from './routing';
import { createClient } from './redis-connection';

const port = config.get('app:port');
const app = new Koa();
app.use(bodyParser());
app.use(exceptionFilter);
app.use(
  swagger.koa({
    path: path.join(__dirname, '../swagger.json'),
  }),
);
app.use(configureAppRouter());


dbConnection()
  .authenticate()
  .then(() => createClient())
  .then(() => app.listen(port, () => console.log(`Listening on port ${port}`)))
  .catch(console.error);
