import express from 'express';
import asyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import { generateToken } from '../ustils.js';
import userModel from '../models/userModel.js';

const userRouter = express.Router();

// POST /api/users/signin
userRouter.post(
  '/signin',
  asyncHandler(async (req, res) => {
    const user = await userModel.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.json({
          _id: user._id,
          email: user.email,
          token: generateToken(user),
        });
        return;
      }
    }
    res.status(401).json({ message: 'Invalid email or password' });
  })
);

// POST /api/users/signup
userRouter.post(
  '/signup',
  asyncHandler(async (req, res) => {
    const user = await userModel.create({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password),
    });
    
    res.json({
      _id: user._id,
      email: user.email,
      token: generateToken(user),
    });
  })
);

export default userRouter;
