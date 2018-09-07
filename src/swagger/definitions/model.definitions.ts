import { lowerCase } from 'lodash';
import { isBasicType } from '../helpers/type.helper';
import { ICreatePropertyDecoratorMetadata } from '../interfaces';

interface IModelDefinition {
  type?: string;
  properties: {
    [key: string]: {
      type?: string;
      schema?: {
        $ref: string;
      },
      items?: {
        type?: string;
        $ref?: string;
      }
      required: boolean;
      format?: string;
      description?: string;
      default?: string;
    };
  };
}

let modelDefinitions: { [key: string]: IModelDefinition } = {};

const addModelDefinition = (definitionKey: string, definitionData: any) => {
  const exist = modelDefinitions[definitionKey] || { properties: {} };
  modelDefinitions = {
    ...modelDefinitions,
    [definitionKey]: {
      type: 'object',
      ...exist,
      ...definitionData,
      properties: {
        ...exist.properties,
        ...definitionData.properties,
      },
    },
  };
};

const getArrayItems = (metadata: ICreatePropertyDecoratorMetadata) => {
  if (isBasicType(metadata.arrayType)) {
    return { type: metadata.arrayType };
  }
  return { $ref: `#/definitions/${metadata.arrayType.name}` };
};

export const createBasicDefinition = (
  definitionType: any,
  target: any,
  propertyKey: string,
  metadata: ICreatePropertyDecoratorMetadata,
) => {
  addModelDefinition(target.constructor.name, {
    properties: {
      [propertyKey]: {
        type: lowerCase(definitionType.name),
        ...metadata,
      },
    },
  });
};

export const createReferenceDefinition = (
  definitionType: any,
  target: any,
  propertyKey: string,
  metadata: ICreatePropertyDecoratorMetadata,
) => {
  addModelDefinition(target.constructor.name, {
    properties: {
      [propertyKey]: {
        $ref: `#/definitions/${definitionType.name}`,
      },
    },
  });
};

export const createArrayDefinition = (
  target: any,
  propertyKey: string,
  metadata: ICreatePropertyDecoratorMetadata,
) => {
  if (!metadata.arrayType) {
    throw TypeError('Please provide arrayType to options!');
  }
  const items = getArrayItems(metadata);
  delete metadata.arrayType;
  addModelDefinition(target.constructor.name, {
    properties: {
      [propertyKey]: {
        type: 'array',
        items,
        ...metadata,
      },
    },
  });
};

export const clearModelDefinitions = () => {
  modelDefinitions = null;
};

export const getModelsDefinitions = () => {
  return modelDefinitions;
};