const express = require('express');
const app = express();
const port = 3000;

app.get('/', ({ response }) => {
  response.status(200).send('Hello, world!')
})

app.listen(port, () => {
  console.log(`API running on http://localhost:${port}`)
})