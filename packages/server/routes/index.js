import { Router } from 'express';
import { router as apiRouter } from './api/index.js';
import { router as authRouter } from './auth/index.js';

export const router = Router();

router.use('/api', apiRouter);
router.use('/auth', authRouter);
