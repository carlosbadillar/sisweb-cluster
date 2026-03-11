import { Router } from 'express';
import { 
    getAllEmpresas, 
    getEmpresaById, 
    createEmpresa, 
    updateEmpresa, 
    deleteEmpresa 
} from '../controllers/empresaController';

const empresaRouter: Router = Router();

empresaRouter.get('/', getAllEmpresas);
empresaRouter.get('/:id', getEmpresaById); 
empresaRouter.post('/', createEmpresa);
empresaRouter.patch('/:id', updateEmpresa);
empresaRouter.delete('/', deleteEmpresa);

export default empresaRouter;