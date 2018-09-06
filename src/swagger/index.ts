import * as express from 'express';
import * as swaggerUi from 'swagger-ui-express';
import { SWAGGER_PORT } from './constants';
import { createSwaggerDocument } from './create-swagger-document';

export const swaggerSetUp = () => {
  const app = express();
  const options = createSwaggerDocument();
  app.use('/swagger-docs', swaggerUi.serve, swaggerUi.setup(options));
  app.listen(SWAGGER_PORT, () => console.log(`Swagger listen on ${SWAGGER_PORT}`));
};

export * from './decorators';
export * from './definitions/route.definitions';