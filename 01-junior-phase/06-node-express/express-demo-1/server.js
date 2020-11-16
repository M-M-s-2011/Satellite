// beep boop
const express = require('express');
const app = express(); // "creating my server" / server obj

// GET /
app.get('/', (req, res, next) => {
  console.log('verb', req.method); // GET
  console.log('URI', req.url); // '/'
  res.send(`<h1>Welcome to the home page!</h1>`)
});

app.get('/puppies', (req, res, next) => {
  res.send('PUPPIES');
});

app.get('/file', (req, res, next) => {
  res.sendFile(__dirname + '/public/bun1.jpg');
});

app.get('/error', (req, res, next) => {
  // res.sendStatus(404);
  res.status(201).send('thing was successfully created');
})

app.listen(3000, () => console.log('listening on port 3000'));






// inside express:
handler(reqObj, resObj, nextFunc)
