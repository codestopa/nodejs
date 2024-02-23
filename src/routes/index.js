//importo solo el enrutador desde express
import { Router } from 'express';
import {home,login, registro, insertUsers, showUsers} from '../controller/controller.js';
const router = Router();


router.get('/login', (req, res) => res.render('login'));
router.get('/', (req, res) => res.render('home'));
router.get('/registro', (req, res) => res.render('registro'));

router.get('/connect',async (req, res) => {
    const [result] = await pool.query("SELECT 1+1 AS RESULT")
res.json(result[0])
});


router.get('/showUsers', showUsers)
router.post('/insertUsers', insertUsers)
export default router;