import User from '../../models/User';

const findUserByEmail = (email: string) => {
  return User.findOne({
    where: { email },
  }).then(user =>
    user ? user.get() : null
  );
};

export default {
  findUserByEmail,
};