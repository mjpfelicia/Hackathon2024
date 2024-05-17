
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("home");
  });

router.get("/cadastrar", function (req, res) {
    res.render("cadastro");
  });
  router.get("/login", function (req, res) {
    res.render("login");
  });
  
  
  router.get("/doar", (req, res) => {
    res.render("doar");
  });
  
  router.get("/junteSe", function (req, res) {
    res.render("junteSe");
  });
  
  router.get("/projeto", function (req, res) {
    res.render("projetoSocial")
  });
  router.get("/sobre",function(req,res){
    res.render("quenSomos")
  });

   module.exports = router;