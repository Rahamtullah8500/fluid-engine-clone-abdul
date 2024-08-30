import express from 'express';
import asyncHandler from 'express-async-handler';
import templateModel from '../models/templateModel.js';

const templateRouter = express.Router();

// /api/popular
templateRouter.get(
  '/',
  asyncHandler(async (req, res) => {
    const popularItems = await templateModel.find();
    res.json(popularItems);
  })
);

export default templateRouter