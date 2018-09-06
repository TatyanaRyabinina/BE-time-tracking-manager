export interface IDefinitionPropertyMetadata {
  description?: string;
  type?: string;
  default?: any;
  format?: string;
  arrayType?: any;
}

export interface ICreatePropertyDecoratorMetadata {
  description?: string;
  required: boolean;
  type?: string;
  default?: any;
  format?: string;
  arrayType?: any;
}

export interface IRouteDecoratorMetadata {
  description?: string;
  response?: any;
  path: string;
  method: string;
}