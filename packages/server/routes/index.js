import { Router } from 'express';
import { router as apiRouter } from './api/index.js';

export const router = Router();

router.use('/api', apiRouter);
