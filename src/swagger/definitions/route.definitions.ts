let routeDefinitions: any = {};

export const getRouteDefinitions = () => routeDefinitions;

export const clearRouteDefinitions = () => {
  routeDefinitions = null;
};

const getParams = (body: any, params: any) => {
  const parameters = [];
  if (body) {
    parameters.push({
      name: body.name,
      in: 'body',
      schema: {
        $ref: `#/definitions/${body.name}`,
      },
    });
  }
  if (params) {
    parameters.push({
      name: params.name,
      in: 'path',
      schema: {
        $ref: `#/definitions/${params.name}`,
      },
    });
  }
  return parameters;
};

const getResponses = (responses: any) => {
  return Object.keys(responses).reduce((acc: any, status: any) => ({
    ...acc,
    [status]: {
      type: 'object',
      description: `${responses[status].name} Schema`,
      schema: {
        type: 'object',
        $ref: `#/definitions/${responses[status].name}`,
      },
    },
  }), {});
};

const createRouteDefinition = ({
  method,
  path,
  body,
  description,
  params,
  responses = {}}: any) => {
  const existRoute = routeDefinitions[path];
  routeDefinitions = {
    ...existRoute,
    [path]: {
      [method]: {
        description,
        parameters: getParams(body, params),
        responses: getResponses(responses),
      },
    },
  };
};

export const getDefinition = (data: any) => createRouteDefinition({ ... data, method: 'get' });
export const postDefinition = (data: any) => createRouteDefinition({ ... data, method: 'post' });
export const putDefinition = (data: any) => createRouteDefinition({ ... data, method: 'put' });
export const patchDefinition = (data: any) => createRouteDefinition({ ... data, method: 'patch' });
export const deleteDefinition = (data: any) => createRouteDefinition({ ...data, method: 'delete'});