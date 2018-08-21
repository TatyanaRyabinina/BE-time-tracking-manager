import * as jwt from 'jsonwebtoken';
import { USER_NOT_FOUND } from '../../core/constants/error.constants';
import NotFoundException from '../../core/exceptions/not-found.exception';
import { create, validate } from '../redis/redis.service';
import UserService from '../users/users.service';
import { config } from '../../config';

const verifyUser = async (email: string) => {
  const user = await UserService.findUserByEmail(email);
  if (user) {
    return await create(email);
  } else {
    throw new NotFoundException(USER_NOT_FOUND);
  }
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