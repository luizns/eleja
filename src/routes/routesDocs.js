import Router from 'express';
import swagger from 'swagger-ui-express';
import swaggerJson from '../docs/swagger.json';

const routes = new Router();

routes.use('/docs', swagger.serve, swagger.setup(swaggerJson))


export default routes;