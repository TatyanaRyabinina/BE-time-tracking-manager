import * as jwt from 'jsonwebtoken';
import { config } from '../../config';
import { EMAIL_CONSTANTS } from '../mail/constants';
import { sendMail } from '../mail/mail.service';
import { create, validate } from '../redis/redis.service';
import UserService from '../users/users.service';

const verifyUser = async (email: string) => {
  const { firstName, lastName } = await UserService.findUserBy({ email });
  const magicLink = await create(email);
  const link = `${config.get('client:hostName')}/verification?&magicLinkToken=${magicLink}&email=${email}`;
  const mailData = { firstName, lastName, link };
  return sendMail(mailData, email, EMAIL_CONSTANTS.MAGIC_LINK);
};

const verifyToken = async (email: string, magicLink: string) => {
  await validate(email, magicLink);
  const user = await UserService.findUserBy({ email });
  const { id, roles } = user;
  const token = await jwt.sign({ id, email, roles }, config.get('jwt:secret'));
  return {
    token,
    user,
  };
};

export default {
  verifyUser,
  verifyToken,
};