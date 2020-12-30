import express from 'express';
import UserController from './controllers/UserController';

const routes = express.Router();

routes.post('/users/new', UserController.store);

export default routes;