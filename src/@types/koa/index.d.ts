import * as Koa from 'koa';

declare module "koa" {
  interface Request {
    body: {} | null | undefined;
    rawBody: {} | null | undefined;
    [key: string]: {} | null | undefined;
  }
}