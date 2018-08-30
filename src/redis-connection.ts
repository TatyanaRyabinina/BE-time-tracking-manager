import * as redis from 'redis';
import { config } from './config';

let redisClient: redis.RedisClient = null;

export default () => redisClient;

export function createClient(options: redis.ClientOpts = config.get('redis')): Promise<redis.RedisClient> {
  const client: redis.RedisClient = redis.createClient(options);
  return new Promise((res, rej) => {
    client.on('error', (err) => console.log('Failed to connect to Redis', err) || rej(err));
    client.on('connect', () => {
      console.log('Connected to Redis');
      redisClient = client;
      res(client);
    });
  });
}