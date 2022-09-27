import Router from 'express';
import swagger from 'swagger-ui-express';
import swaggerJson from '../docs/swagger.json';

const routesDocs = new Router();

routesDocs.use('/docs', swagger.serve, swagger.setup(swaggerJson))


export default routesDocs;