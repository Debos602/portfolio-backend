import { TDecodedToken } from './../modules/car/car.interface';
import { NextFunction, Request, Response } from 'express';
import AppError from '../errors/AppError';
import httpStatus from 'http-status';
import jwt from 'jsonwebtoken';
import config from '../config';
import catchAsync from '../utils/catcgAsync';

const auth = (requiredRole: string) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    console.log('Authorization:', authHeader);

    // Ensure the Authorization header exists and starts with "Bearer "
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new AppError(
        httpStatus.UNAUTHORIZED,
        'Authorization header missing or incorrect',
      );
    }

    // Extract the token by removing the "Bearer " prefix
    const token = authHeader.split(' ')[1];

    // Verify the token
    jwt.verify(
      token,
      config.jwt_access_token_secret as string,
      (err, decoded) => {
        if (err) {
          throw new AppError(
            httpStatus.UNAUTHORIZED,
            'Invalid or expired token',
          );
        }

        const decodedToken = decoded as TDecodedToken;
        // Log the decoded token (for debugging)
        console.log('Decoded Token:', decoded);

        // Check if the decoded role matches the required role
        if (decodedToken?.role !== requiredRole) {
          throw new AppError(httpStatus.FORBIDDEN, 'Access denied');
        }

        // Optionally attach user information to request

        // Proceed to the next middleware or route handler
        next();
      },
    );
  });
};

export default auth;
