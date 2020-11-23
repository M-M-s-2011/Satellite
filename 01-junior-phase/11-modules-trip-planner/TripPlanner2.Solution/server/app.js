const express = require("express");
const morgan = require("morgan");
const path = require("path");

const {db} = require("./models");

const app = express();

// logging and body-parsing
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// serve dynamic routes
app.use("/api", require("./routes"));

// static file-serving middleware
app.use(express.static(path.join(__dirname, "..", "public")));

// failed to catch req above means 404, forward to error handler
app.use(function(req, res, next) {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// handle any errors
app.use(function(err, req, res, next) {
  res.status(err.status || 500).send(err.message);
});

// listen on a port
const port = 3000;
app.listen(port, async () => {
  console.log("The server is listening closely on port", port);
  try {
    await db.sync();
    console.log("Synchronated the database");
  } catch (err) {
    console.error("Trouble right here in River City", err, err.stack);
  }
});
