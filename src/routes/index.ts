import { Router } from 'express';
import empresaRouter from './empresaRoutes';

const router: Router = Router();

router.use('/empresa', empresaRouter);

export default router;