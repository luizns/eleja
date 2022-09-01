import Router from 'express';

// importando validações
import JudgeValidator from '../middlewares/JudgeValidator';
import IndexValidator from '../middlewares/IndexValidator';

//importando controllers para Juízes
import CreateJudgeController from '../app/controllers/Judges/CreateJudgeController';
import ListAllJudgeController from '../app/controllers/Judges/ListAllJudgeController';
import UpdateJudgeController from '../app/controllers/Judges/UpdateJudgeController';
import DeleteJudgeController from '../app/controllers/Judges/DeleteJudgeController';
import JudgeValidator from '../middlewares/JudgeValidator';

// instanciando objetos do crud de Juízes
const createJudgeController = new CreateJudgeController();
const deleteJudgeController = new DeleteJudgeController();
const updateJudgeController = new UpdateJudgeController();
const listAllJudgeController = new ListAllJudgeController();

const routesJudge = new Router();

// Rota para juízes
routesJudge.get('/judges', (req, res) => listAllJudgeController.listAll(req, res));

routesJudge.post('/judges', JudgeValidator, (req,res) => createJudgeController.create(req, res));

routesJudge.put('/judges/:id', IndexValidator, JudgeValidator, (req, res) => updateJudgeController.update(req, res));

routesJudge.delete('/judges/:id', IndexValidator, (req, res) => deleteJudgeController.delete(req, res));

export default routesJudge;