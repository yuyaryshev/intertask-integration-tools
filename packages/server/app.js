'strict';

import process from 'node:process';
import express from 'express';
import cors from 'cors';
import { config } from './config/index.js';
import { router as appRouter } from './routes/index.js'

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors())
app.use(express.json());
app.use('/', appRouter);

const server = app.listen(PORT, () => {
    console.info(`Listening on port ${PORT}`);
});
