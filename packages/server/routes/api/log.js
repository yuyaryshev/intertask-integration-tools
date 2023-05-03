import { Router } from 'express';

export const router = Router();

router.post('/', (req, res) => {
    res.json(req.body)
})