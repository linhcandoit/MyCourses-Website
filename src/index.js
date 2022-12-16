const express = require("express");
const { engine } = require("express-handlebars");
const path = require("path");
const morgan = require("morgan");
// const exp = require("constants");
const routes = require("./routes/index");
const db = require("./config/db/index");

const app = express();

// Connect to DB
db.connect();

// app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.engine(
  ".hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resources", "views"));

// routes
// All the code here, the entire is just setting

routes(app);

app.listen(3000, () => {
  console.log("App listening at http://localhost:3000");
});

/*
  collection - table
  document: bộ trong các bảng (các dòng)
  
*/
