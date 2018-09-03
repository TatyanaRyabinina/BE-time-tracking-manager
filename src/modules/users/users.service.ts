import BadRequestException from '../../core/exceptions/bad-request.exception';
import NotFoundException from '../../core/exceptions/not-found.exception';
import User from '../../models/User';
import { CreateUserDto } from './dto/create-user.dto';
import { USER_NOT_FOUND, USER_IS_EXIST } from './users.constants';

const createUser = async (userData: CreateUserDto) => {
  try {
    await findUserByEmail(userData.email);
    throw new BadRequestException(USER_IS_EXIST);
  } catch (err) {
    if (err instanceof NotFoundException) {
      return await User.create(userData);
    }
    throw err;
  }
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