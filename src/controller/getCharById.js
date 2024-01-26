// const dotenv = require("dotenv");
// dotenv.config();
const axios = require("axios");

// const URL = process.env.URL_API;
const URL = `https://rickandmortyapi.com/api/character/`;

const getCharById = async (req, res) => {
  try {
    const { id } = req.params; //req.params es un objeto

    const { data } = await axios(URL + id);
    const { name, gender, species, origin, image, status } = data;
    const char = { name, gender, species, origin, image, status, id };

    if (char.name) {
      res.status(200).json(char);
    }
  } catch (error) {
    return res.status(404).send({ error: error.message });
  }
};

module.exports = getCharById;
