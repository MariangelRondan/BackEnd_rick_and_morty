const server = require("./App");
const { conn } = require("./DB_connection");
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 3001;

conn.sync({ force: false }).then(() => {
  server.listen(PORT, () => {
    console.log("Server raised in port: " + PORT);
  });
});
