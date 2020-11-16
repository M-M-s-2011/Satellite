// FAKE DATABASE:
let db = {
  a: 'apple',
  b: 'banana',
  c: 'clementine',
  d: 'durian',
  e: 'elderberry',
  f: 'fig',
  g: 'grape',
  h: 'honeydew',
  j: 'juniper berry',
  k: 'kiwi',
  l: 'lemon',
  m: 'mango',
  n: 'nectarine',
  o: 'orange',
  p: 'plum',
  r: 'raspberry',
  s: 'strawberry',
  t: 'tangerine',
  w: 'watermelon'
};

/*
  This function will always return a promise -
  It will be "pending" for 3s until it resolves
  And will resolve to the value of the looked-up
  fruit from the "database"
*/
const fakeDbCall = (letter) => {
  return new Promise((resolve, reject) => {
    // what a "real life" db function might do:
    // try {
    //   // do some action - query your database
    //   resolve(result);
    // }
    // catch(err) {
    //   reject(err);
    // }



    setTimeout(() => {
      let fruit = db[letter] || 'not found';
      resolve(`fruit for letter ${letter}: ${fruit}`);
    }, 3000);
  });
};

module.exports = fakeDbCall;
