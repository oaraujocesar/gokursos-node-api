import express from 'express';

const routes = express.Router();

routes.get('/', (request, response) => {
  response.status(200).json({ message: 'Hello, goKursos!' })
});

export default routes;