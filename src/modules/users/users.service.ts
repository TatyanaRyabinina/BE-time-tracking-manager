import BadRequestException from '../../core/exceptions/bad-request.exception';
import NotFoundException from '../../core/exceptions/not-found.exception';
import { USER_NOT_FOUND, USER_IS_EXIST } from './users.constants';

import User from '../../models/User';

interface IUserField {
  email: string;
  firstName: string;
  lastName: string;
}

const createUser = async (userData: IUserField) => {
  try {
    await findUserByEmail(userData.email);
    throw new BadRequestException(USER_IS_EXIST);
  } catch (err) {
    if (err instanceof NotFoundException) {
      return await addNewUser(userData);
    }
    if (err instanceof BadRequestException) {
      throw err;
    }
  }
};

const addNewUser = (user: IUserField) => {
  return User.create(
    user,
  );
};

const findUserByEmail = async (email: string) => {
  const user = await User.findOne({
    where: { email },
  });
  if (user) {
    return user;
  } else {
    throw new NotFoundException(USER_NOT_FOUND);
  }
};

export default {
  findUserByEmail,
  createUser,
};