import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as path from 'path';
import * as swagger from 'swagger-injector';
import { config } from './config';
import { configureAppRouter } from './routing';

const port = config.get('app:port');

const app = new Koa();

app.use(bodyParser());
app.use(
  swagger.koa({
    path: path.join(__dirname, '../swagger.json'),
  },
));
app.use(configureAppRouter());

app.listen(port);