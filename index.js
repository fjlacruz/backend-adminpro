require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./database/config");

const app = express();

app.use(cors());

//lectura y parseo de body
app.use(express.json());

dbConnection();
//console.log(process.env);

//rutas
app.use("/api/usuarios", require("./routes/usuarios"));
app.use("/api/login", require("./routes/auth"));

app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en http://localhost:` + process.env.PORT);
});
