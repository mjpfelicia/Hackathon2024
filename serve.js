const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const path = require("path");
const hand = require("express-handlebars");
const routes =require("./routes/routes");


const app = express();
const port = 3000;

app.use(session({ secret: "1234567890" }));
app.use(bodyParser.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "./paginas"));
app.use(express.static(__dirname + '/assets'));
app.engine("handlebars", hand.engine());
app.set("view engine", "handlebars");//




app.use("/", routes);



app.listen(port, () => {
  console.log(`Servidor rodando http://localhost:${port}`);
});


