import {
  createBasicDefinition,
  createArrayDefinition,
  createReferenceDefinition,
} from '../definitions/model.definitions';
import { ICreatePropertyDecoratorMetadata } from '../interfaces';
import { isBasicType, isArray, isReferenceType } from './type.helper';

export const createPropertyDecorator = (metadata: ICreatePropertyDecoratorMetadata): PropertyDecorator => {
  return (target: any, propertyKey: string) => {
      const definitionType = Reflect.getMetadata('design:type', target, propertyKey);
      if (definitionType) {
        if (isBasicType(definitionType)) {
          createBasicDefinition(definitionType, target, propertyKey, metadata);
        } else if (isReferenceType(definitionType)) {
          createReferenceDefinition(definitionType, target, propertyKey, metadata);
        } else if (isArray(definitionType)) {
          createArrayDefinition(target, propertyKey, metadata);
        }
      }
  };
};