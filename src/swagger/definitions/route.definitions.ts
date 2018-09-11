interface IResponses { [key: string]: any; }

interface IRouteDefinitionData {
  path: string;
  body?: any;
  description?: string;
  params?: any;
  query?: any;
  responses?: IResponses;
  method?: string;
}

let routeDefinitions: {[key: string]: IRouteDefinitionData} = {};

export const getRouteDefinitions = () => routeDefinitions;

export const clearRouteDefinitions = () => {
  routeDefinitions = null;
};

const getParams = (body: any, params: any, query: any) => {
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

  if (query) {
    parameters.push({
      name: query.name,
      in: 'query',
      schema: {
        $ref: `#/definitions/${query.name}`,
      },
    });
  }
  return parameters;
};

const getResponses = (responses: IResponses) => {
  return Object.keys(responses).reduce((acc: any, status: string) => ({
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
  query,
  responses = {} }: IRouteDefinitionData) => {
  const existRoute = routeDefinitions[path];
  routeDefinitions = {
    ...routeDefinitions,
    [path]: {
      ...existRoute,
      [method]: {
        description,
        parameters: getParams(body, params, query),
        responses: getResponses(responses),
      },
    },
  };
};

export const getDefinition = (data: IRouteDefinitionData) => createRouteDefinition({ ...data, method: 'get' });
export const postDefinition = (data: IRouteDefinitionData) => createRouteDefinition({ ...data, method: 'post' });
export const putDefinition = (data: IRouteDefinitionData) => createRouteDefinition({ ...data, method: 'put' });
export const patchDefinition = (data: IRouteDefinitionData) => createRouteDefinition({ ...data, method: 'patch' });
export const deleteDefinition = (data: IRouteDefinitionData) => createRouteDefinition({ ...data, method: 'delete' });