'strict';

import express from 'express';
import { router as appRouter } from './routes/index.js'

const app = express();

app.use('/', appRouter);

app.listen(3000);
