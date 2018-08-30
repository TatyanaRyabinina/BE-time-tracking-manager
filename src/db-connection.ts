import * as path from 'path';
import { Sequelize } from 'sequelize-typescript';
import { config } from './config';

export default (dbConfig = config.get('db')) => {
  return new Sequelize({
    ...dbConfig,
    modelPaths: [path.join(__dirname, './models')],
    pool: {
      max: 100,
      min: 0,
      idle: 20000,
      acquire: 20000,
      evict: 30000,
      handleDisconnects: true,
    },
  });
};