import { expressjwt as jwt } from 'express-jwt';
import { config } from '../config/index.js';

export const auth = jwt({
    secret: config.secret,
    algorithms: ['HS256'],
})

