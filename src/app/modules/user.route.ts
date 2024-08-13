import express from 'express';
import { UserControllers } from './user/user.controller';

const router = express.Router();

router.post('/auth/signup', UserControllers.SignUp);
router.post('/auth/signin', UserControllers.SignIn);

export const UserRoutes = router;
