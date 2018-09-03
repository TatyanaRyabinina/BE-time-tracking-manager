import * as Koa from 'koa';
declare module 'koa' {
  // tslint:disable-next-line
  interface Request {
    [key: string]: {} | null | undefined;
    body: {} | null | undefined;
    rawBody: {} | null | undefined;
  }
}