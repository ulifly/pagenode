import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => res.render('index'));
router.get('/about', (req, res) => res.render('about'));
router.get('/contact', (req, res) => res.render('contact'));
router.get('/gaming', (req, res) => res.render('gaming', { titulo: 'Pagina de gaming' }));

export default router;
