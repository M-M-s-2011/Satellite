// beep boop
const express = require('express');
const morgan = require('morgan'); // logging middleware
const path = require('path');
const app = express(); // "creating my server" / server obj

app.use(morgan('dev'));

// static middleware
// check if the requested resource is in the static folder
app.use(express.static(path.join(__dirname, '/public')));

// app.USE = "catch all" matches ALL VERBS
// app.use('*', (req, res, next) => {
//   console.log('logging stuff');
//   next();
// });

// GET /
app.get('/', (req, res, next) => {
  // console.log('verb', req.method); // GET
  // console.log('URI', req.url); // '/'
  res.send(`<h1>Welcome to the home page!</h1>`)
});

// GET /puppies/:id
app.get('/puppies/:id', (req, res, next) => {
  res.send(`info for puppy # ${req.params.id}`)
});

app.get('/mightWork', (req, res, next) => {
  try {
    let puppy = getData();
    res.send(puppy);
  }
  catch(err) {
    // handle the error
    res.sendFile('path to my error.html');
    res.send('something went wrong: ', err.message);
  }
})


app.listen(3000, () => console.log('listening on port 3000'));



// in some other library:
const getData = () => {
  if(Math.random() < 0.5) {
    throw new Error('ahhhhhh!!!!! D:');
  }
  else {
    return 'Puppy: Spot';
  }
}



