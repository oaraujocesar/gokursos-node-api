import express from 'express';
const app = express();
const port = 3000;

app.get('/', (request, response) => {
  response.status(200).send('Hello, gokursos!')
})

app.listen(port, () => {
  console.log(`API running on http://localhost:${port}`)
})