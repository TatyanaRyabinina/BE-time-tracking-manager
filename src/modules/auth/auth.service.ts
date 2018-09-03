import * as jwt from 'jsonwebtoken';
import { config } from '../../config';
import { EMAIL_CONSTANTS } from '../mail/constants';
import { sendMail } from '../mail/mail.service';
import { create, validate } from '../redis/redis.service';
import UserService from '../users/users.service';

const verifyUser = async (email: string) => {
  const { firstName, lastName } = await UserService.findUserByEmail(email);
  const magicLink = await create(email);
  const link = `${config.get('client:hostName')}/verification?magicLinkToken=${magicLink}&email=${email}`;
  const mailData = { firstName, lastName, link };
  return sendMail(mailData, email, EMAIL_CONSTANTS.MAGIC_LINK);
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