import { Router } from 'express';

export const router = Router();

router.post('/', (req, res) => {
    res.json({ tabs: [], unusedYData:"config api 1234523", js: "return a+1" });
})
