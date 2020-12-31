import express from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/authentication';
import PostController from './app/controllers/PostController';

const routes = express.Router();

routes.post('/users', UserController.store);
routes.post('/auth', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);
routes.delete('/users', UserController.delete);
routes.post('/posts', PostController.store);
routes.get('/posts', PostController.index);


export default routes;