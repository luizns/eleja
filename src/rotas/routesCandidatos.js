import Router from 'express';

// importação do multer para upload de arquivos
import multer from 'multer';
import multerConfig from '../config/multer';
import uploadFileController from '../app/controllers/UploadFileController';
const uploadFile = multer({ storage: multerConfig })

// importando validações
import CandidatoValidator from '../middlewares/CandidatoValidator';



//importando controllers para Candidato
import CreateCandidatoController from '../app/controllers/Candidatos/CreateCandidatoController';
import ListAllCandidatosController from '../app/controllers/Candidatos/ListAllCandidatoController';
import UpdateCandidatoController from '../app/controllers/Candidatos/UpdateCandidatoController';
import DeleteCandidatoController from '../app/controllers/Candidatos/DeleteCandidatoController';
import CandidatoValidator from '../middlewares/CandidatoValidator';

// instanciando objetos do crud de Candidato
const createCandidatoController = new CreateCandidatoController();
const deleteCandidatoController = new DeleteCandidatoController();
const updateCandidatoController = new UpdateCandidatoController();
const listAllCandidatosController = new ListAllCandidatosController();


const routesCandidato = new Router();

// Rota para candidatos
routesCandidato.get('/candidatos', (req, res) => listAllCandidatosController.listAll(req, res));

routesCandidato.post('/candidatos', CandidatoValidator, (req,res) => createCandidatoController.create(req, res));

routesCandidato.put('/candidatos/:id', CandidatoValidator, (req, res) => updateCandidatoController.update(req, res));

routesCandidato.delete('/candidatos/:id', (req, res) => deleteCandidatoController.delete(req, res));

routesCandidato.post('/uploads', uploadFile.single('file') ,uploadFileController.storeFile);


export default routesCandidato;