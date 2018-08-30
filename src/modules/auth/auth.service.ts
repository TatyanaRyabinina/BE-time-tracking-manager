import * as jwt from 'jsonwebtoken';
import { config } from '../../config';
import { create, validate } from '../redis/redis.service';
import UserService from '../users/users.service';

const verifyUser = async (email: string) => {
  await UserService.findUserByEmail(email);
  return create(email);
};

const verifyToken = async (email: string, magicLink: string) => {
  await validate(email, magicLink);
  const token = await jwt.sign(email, config.get('jwt:secret'));
  const user = await UserService.findUserByEmail(email);
  return {
    token,
    user,
  };
};

export default {
  verifyUser,
  verifyToken,
};