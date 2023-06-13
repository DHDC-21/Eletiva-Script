// importando modulos NODE
const express = require("express");
const path = require('path');
const morgan = require("morgan");
const routes = require("./routes/routes.js");
require("dotenv").config();

// criando o aplicativo
const app = express();

// configurando o VIEW
app.set("view engine", "ejs");
app.set("views", "views");

// setado o public e usando morgan e jso
app.use(express.static('./public'));
app.use(express.json());
app.use(morgan("short"));

// Middleware para processar o corpo das requisições
app.use(express.urlencoded({ extended: false }));

// definindo as rotas
app.use("/", routes);

// ouvindo o servidor na porta 3000
app.listen(process.env.PORT, () => {
    console.log("http://127.0.0.1:" + process.env.PORT);
})
