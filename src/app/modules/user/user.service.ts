import config from '../../config';
import { TUser } from './user.interface';
import { UserModel } from './user.model';
import jwt from 'jsonwebtoken';

const createUser = async (user: TUser) => {
  const result = await UserModel.create(user);
  return result;
};
const signIn = async (user: TUser) => {
  const result = await UserModel.create(user);

  const jwtPayload = {
    userId: result._id,
    role: user.role,
  };

  const accessToken = jwt.sign(
    jwtPayload,
    config.jwt_access_token_secret as string,
    {
      expiresIn: '10d',
    },
  );

  return { result, accessToken };
};

export const UserServices = {
  createUser,
  signIn,
};
