declare module 'swagger-injector' {
  import { Middleware } from "koa";  
  interface ISwaggerOptions {
    path: string;
  }
  function koa(options: ISwaggerOptions): Middleware;
}