import process from 'node:process';

const SECRET = process.env.SECRET || 'secret';

export const config = {
    /** @type {string} */
    secret: process.env.NODE_ENV === 'production' ? SECRET : 'secret',
}
