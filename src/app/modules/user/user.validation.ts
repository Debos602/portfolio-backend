import { z } from 'zod';

// Zod schema for TUser
export const userValidationSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  role: z.enum(['user', 'admin']).default('user'),
  password: z
    .string({ invalid_type_error: 'password must be a string' })
    .min(6, 'Password must be at least 6 characters long')
    .optional(),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  address: z.string().min(1, 'Address is required'),
});

// Zod schema for TSignIn
export const signInvalidationSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z
    .string({ invalid_type_error: 'password must be a string' })
    .min(6, 'Password must be at least 6 characters long'),
});
