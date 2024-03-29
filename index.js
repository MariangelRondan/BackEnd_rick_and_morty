const server = require("./src/App.js");
const { conn } = require("./src/DB_connection");
const cors = require("cors");
server.use(cors());


const PORT = 3001;

conn.sync({ force: false }).then(() => {
  server.listen(PORT, () => {
    console.log("Server raised in port: " + PORT);
  });
});
