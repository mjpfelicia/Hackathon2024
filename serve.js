const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const path = require("path");
const nodemailer = require("nodemailer");

const app = express();
const port = 3000;

app.use(session({ secret: "1234567890" }));
app.use(bodyParser.urlencoded({ extended: true }));

app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.set("views", path.join(__dirname, "./paginas"));
app.use(express.static(__dirname + '/assets'));


app.get("/", (req, res) => {
  res.render("home");
});

app.get("/cadastrar", function (req, res) {
  res.render("cadastro.html");
});

app.get("/doar", (req, res) => {
  res.render("doar.html");
});

app.get("/junteSe", function (req, res) {
  res.render("junteSe.html");
});

app.get("/projeto", function (req, res) {
  res.render("projetoSocial.html")
});
app.get("/sobre",function(req,res){
  res.render("/quenSomos.html")
});


app.listen(port, () => {
  console.log(`Servidor rodando http://localhost:${port}`);
});


