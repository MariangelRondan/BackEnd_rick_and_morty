const server = require("./src/App");
const { conn } = require("./src/DB_connection");
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 3001;

conn.sync({ force: false }).then(() => {
  server.listen(PORT, () => {
    console.log("Server raised in port: " + PORT);
  });
});
