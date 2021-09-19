const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.json());

app.use('/products', routes);

app.use((req, res) => {
  res.json({message: 'the requested page do not exists!', error: true, httpStatus: 404});
});


module.exports = app;