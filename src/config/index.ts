import * as nconf from 'nconf';
import * as path from 'path';
import { LOCAL_ENV } from '../core/constants/env.constants';

export const env = process.env.NODE_ENV || LOCAL_ENV;

export const config = nconf
  .argv()
  .env()
  .file({
    file: path.join(__dirname, `../../app-configs/${env}.json`),
  });
