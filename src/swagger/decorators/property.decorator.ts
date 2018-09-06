import { createPropertyDecorator } from '../helpers/decorators.helpers';
import { IDefinitionPropertyMetadata } from '../interfaces';

export const DefinitionProperty = (metadata: IDefinitionPropertyMetadata = {}): PropertyDecorator => {
  return createPropertyDecorator({...metadata, required: true });
};

export const DefinitionPropertyOptional = (metadata: IDefinitionPropertyMetadata = {}): PropertyDecorator => {
  return createPropertyDecorator({...metadata, required: false });
};