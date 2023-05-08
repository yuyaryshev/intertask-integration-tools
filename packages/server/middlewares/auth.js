import { verify } from 'jsonwebtoken';
import { config } from '../config/index.js';

/** @type {import('express').Handler} */
export const cookieJwtAuth = (req, res, next) => {
    const token = req.cookies.token;

    try {
        const user = verify(token, config.secret);

        req.user = user;

        next();
    } catch (error) {
        res.clearCookie('token');

        return res.redirect('/auth');
    }
}
