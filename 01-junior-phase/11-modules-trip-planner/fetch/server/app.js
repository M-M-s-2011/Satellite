/* SERVER SIDE JS */

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const Dog = require('./database/DogModel');
const app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/dogs/:id', async (req, res, next) => {
  try {
    const dog = await Dog.findByPk(req.params.id);
    res.json(dog);
  } catch (error) {
    next(error);
  }
});

app.listen(3000, () => {
  console.log('I am listening on port 3000!');
});
