
const express = require("express");
const route = express.Router();

const homeController = require("./src/controllers/homeController");

/* ROTAS DA HOME */
route.get("/captacaolead", homeController.paginaInicial);

/* ROTA DE ENVIO */
route.post("/captacaolead", homeController.enviarFormulario);

module.exports = route;
