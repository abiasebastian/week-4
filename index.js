const express = require("express");
const app = express();
const session = require("express-session");
const router = require("./router");
const router2 = require("./router2");
const morgan = require("morgan");
const PORT = process.env.PORT || 4000;

app.set("view engine", "ejs");
app.use(
  session({
    secret: "xxxxxx",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);
app.use("/list", router2);
app.use((err,req,res,next)=> res.status(500).send(err.message))


app.listen(PORT, () => console.log(`Server running at port : ${PORT}`));
