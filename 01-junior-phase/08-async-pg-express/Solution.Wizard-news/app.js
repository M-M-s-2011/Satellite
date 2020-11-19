const express = require("express"); // newer versions of express INCLUDE body-parser so you don't need to install it manually!
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({extended: false})); // <-- can use body-parser functions from express now that it's built-in (instead of directly from the body-parser library)
app.use(express.json());
// url encoded and json are 2 different formats that a request body could be sent as
// can add multiple body parsers (like the 2 above) to make sure your app can parse bodies of any format
// after parsing, the nice key-value object will be put on `req.body` (available now within ALL subsequent middlewares/routes)

app.use("/posts", require("./routes/posts"));

app.get("/", (req, res) => {
  res.redirect("/posts");
})


const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
