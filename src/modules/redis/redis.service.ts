import * as moment from 'moment';
import * as generateRandomString from 'uuid/v4';
import { config } from '../../config';
import NotFoundException from '../../core/exceptions/not-found.exception';
import redisClient from '../../redis-connection';
import { TOKEN_NOT_FOUND } from './redis.constants';

export const create = (email: string): Promise<string> => {
  const token = generateRandomString();
  return new Promise((resolve, reject) => {
    redisClient().hmset(
      token,
      { email: email.toLowerCase() },
      () => {
        const expiresInDays = config.get('oneTimeTokenExpireDays');
        redisClient().expireat(
          token,
          moment(new Date())
            .add(expiresInDays, 'd')
            .unix(),
          (err: Error) => {
            if (err) {
              reject(err);
            }
            resolve(token);
          },
        );
      },
    );
  });
};

export const validate = (email: string, token: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    redisClient().hgetall(token, (err: Error, obj: { email: string }) => {
      if (err) {
        reject(err);
      }
      if (!obj || obj.email.toLowerCase() !== email.toLowerCase()) {
        return reject(new NotFoundException(TOKEN_NOT_FOUND));
      }
      redisClient().del(token, () => resolve());
    });
  });
};
