import { Router, json } from 'express';
import { router as configRouter } from './config.js';
import { router as dataRouter } from './data.js';
import { router as logRouter } from './log.js';

export const router = Router();

router.use('/config', configRouter);
router.use('/data', dataRouter);
router.use('/log', logRouter);
