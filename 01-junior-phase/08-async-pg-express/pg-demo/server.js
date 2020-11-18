// SETUP:
// `npm install` to get `pg`
// `createdb pg-demo` to make the database used in this code snippet
// either from a GUI (postico, pgAdmin) or the psql CLI, do the following to get some dummy data set up:
// 1. go to the "pg-demo" database
// 2. create a table called "users"
// 3. add some columns to that table (like "name", maybe "age")
// 4. populate that table (add rows) so you have data to SELECT later!

const {Client} = require('pg'); // import the Client constructor from pg
const client = new Client({ // create a new client that will talk to postgres
  database: 'pg-demo', // specifying the database name, all other config options are the default
});

const main = async () => { // all of our db operations are async (need to be awaited)
  try {
    await client.connect(); // tell the client to connect to postgres (using the config defined above)
    let result = await client.query(`SELECT * FROM users;`); // start querying!
    console.log(result.rows); // result is a large object, has a `rows` property with the data from postgres
    await client.end(); // make sure to close the connection when you're done with it
  }
  catch (err) {
    console.log('oh no! something went wrong:', err.message)
  }
}

main();
