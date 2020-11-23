const db = require('./server/database/db');
const Dog = require('./server/database/DogModel');

const dogs = [{
  name: 'Bernard',
  image: 'https://images.dog.ceo/breeds/bulldog-english/bunz.jpg'
}, {
  name: 'Chanel',
  image: 'https://images.dog.ceo/breeds/frise-bichon/jh-ezio-3.jpg'
}, {
  name: 'Tucker',
  image: 'https://images.dog.ceo/breeds/mountain-bernese/n02107683_3291.jpg'
}, {
  name: 'Ruby',
  image: 'https://images.dog.ceo/breeds/brabancon/n02112706_1688.jpg'
}, {
  name: 'Lily',
  image: 'https://images.dog.ceo/breeds/entlebucher/n02108000_1274.jpg'
}];

const seed = async () => {
  await db.sync({force: true});
  await Promise.all(dogs.map(dog => Dog.create(dog)));
  await db.close();
};

seed();
