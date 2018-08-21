import * as redis from 'redis';
import { config } from './config';

let redisClient = null;

export default () => redisClient;

export function createClient(options: redis.ClientOpts = config.get('redis')): Promise<redis.RedisClient> {
  const client: redis.RedisClient = redis.createClient(options);
  return new Promise((res, rej) => {
    client.on('error', (err) => console.error('Failed to connect to Redis', err) || rej(err));
    client.on('connect', () => {
      console.error('Connected to Redis');
      redisClient = client;
      res(client)
    });
  });
}