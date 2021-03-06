import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as logger from 'koa-logger';
import * as cors from 'koa2-cors';
import { config } from './config';
import exceptionFilter from './core/middleware/exception-filter.middleware';
import dbConnection from './db-connection';
import { createClient } from './redis-connection';
import { configureAppRouter } from './routing';
import { swaggerSetUp } from './swagger';

const port = config.get('app:port');
const app = new Koa();
app.use(logger());
app.use(bodyParser());
app.use(cors());
app.use(exceptionFilter);
app.use(configureAppRouter());

dbConnection()
  .authenticate()
  .then(() => createClient())
  .then(() => swaggerSetUp())
  .then(() => app.listen(port, () => console.log(`Listening on port ${port}`)))
  .catch(console.log);
