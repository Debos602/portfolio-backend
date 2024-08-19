import { Request, Response } from 'express';
import { TSignIn, TUser } from './user.interface';
import { UserServices } from './user.service';
import { userValidationSchema } from './user.validation';
import { UserModel } from './user.model';

const SignUp = async (req: Request, res: Response) => {
  try {
    const user: TUser = req.body; // Correctly assigning `user` to be of type `TUser`

    const zodParsedata = userValidationSchema.parse(user);

    const result = await UserServices.createUser(zodParsedata);
    if (!result) {
      return res.status(404).json({
        success: false,
        statusCode: 404,
        message: 'No data found',
        data: {},
      });
    }

    res.status(201).json({
      success: true,
      message: 'User registered successfullys',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'An error occurred while creating the user',
    });
  }
};
const SignIn = async (req: Request, res: Response) => {
  try {
    const { email, password }: TSignIn = req.body;

    const user = await UserModel.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(401).json({
        success: false,
        statusCode: 404,
        message: 'Invalid email or password',
      });
    }

    const { accessToken } = await UserServices.signIn(user);

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'User logged in successfully',
      data: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        phone: user.phone,
        address: user.address,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
      token: accessToken,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      statusCode: 500,
      message: 'An error occurred during sign-in',
    });
  }
};

export const UserControllers = {
  SignUp,
  SignIn,
};
