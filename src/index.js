const server = require("./App");
const PORT = 3001;
const { conn } = require("./DB_connection");
// const express = require("express");
// const router = require("./routes/index");

// const server = express();

// server.use(express.json());

// server.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Credentials", "true");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
//   next();
// });

// server.use("/rickandmorty", router);
conn.sync({ force: true }).then(() => {
  //force indica si queremos reinciar la base de datos o no.
  //Si esta en true, cada vez que guardo los cambios, borra todas las tablas y las genera
  //todas otra vez con los datos nuevos.Al principio se usa true, cuando quede ok, false.
  server.listen(PORT, () => {
    console.log("Server raised in port: " + PORT);
  });
});
