import Router from 'express';

// importação do multer para upload de arquivos
import multer from 'multer';
import multerConfig from './config/multer';
import uploadFileController from './app/controllers/UploadFileController';

// importando controllers
import userController from './app/controllers/Users/UserController';
const judgeController =  require('./app/controllers/Judges/JudgeController');

// importando validações
import UserValidator from './middlewares/UserValidator';
import IndexValidator from './middlewares/IndexValidator';

const uploadFile = multer({ storage: multerConfig })

const routes = new Router();

// Rota para usuários
routes.get('/users', userController.listAll);
routes.post('/users', UserValidator, userController.create);
routes.put('/users/:id', IndexValidator, UserValidator, userController.update);
routes.delete('/users/:id', IndexValidator, userController.delete);

// Rota para juízes
routes.get('/judges', judgeController.listAll);
routes.post('/judges', judgeController.create);
routes.put('/judges/:id', IndexValidator, judgeController.update);
routes.delete('/judges/:id', IndexValidator, judgeController.delete);

routes.post('/uploads', uploadFile.single('file') ,uploadFileController.storeFile);

export default routes;