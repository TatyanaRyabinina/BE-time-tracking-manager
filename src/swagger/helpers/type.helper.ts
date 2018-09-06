import { BASIC_TYPES } from '../constants';

export const isBasicType = (definitionType: any) => {
  return BASIC_TYPES.some((type) => type === definitionType);
};

export const isArray = (definitionType: any) => {
  return definitionType === Array;
};

export const isReferenceType = (definitionType: any) => {
  return !isArray(definitionType) && !isBasicType(definitionType) && definitionType.constructor;
};