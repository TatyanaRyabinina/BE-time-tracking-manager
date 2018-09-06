import basicOptions from './basic-swagger-config';
import { getModelsDefinitions } from './definitions/model.definitions';
import { getRouteDefinitions } from './definitions/route.definitions';

export const createSwaggerDocument = () => {
  return {
    ...basicOptions,
    definitions: getModelsDefinitions(),
    paths: getRouteDefinitions(),
  };
};