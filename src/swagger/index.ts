import * as express from 'express';
import * as swaggerUi from 'swagger-ui-express';
import { env } from '../config';
import { PRODUCTION_ENV } from '../core/constants/env.constants';
import { SWAGGER_PORT } from './constants';
import { createSwaggerDocument } from './create-swagger-document';

export const swaggerSetUp = (): PromiseLike<void> => {
  if (env !== PRODUCTION_ENV) {
    const app = express();
    const options = createSwaggerDocument();
    app.use('/swagger-docs', swaggerUi.serve, swaggerUi.setup(options));
    return new Promise((res) => {
      app.listen(SWAGGER_PORT, () => console.log(`Swagger listen on ${SWAGGER_PORT}`) || res());
    });
  }
  return Promise.resolve();
};

export * from './decorators';
export * from './definitions/route.definitions';