const { Favorite } = require("../DB_connection"); //por qué se importa desde db en vez de desde models?

const postFav = async (req, res) => {
  const { name, origin, status, image, species, gender } = req.body;
  try {
    if (!name || !origin || !status || !image || !species || !gender) {
      return res.status(401).send("Faltan datos");
    } else {
      await Favorite.create({
        name,
        origin,
        status,
        image,
        species,
        gender,
      });
      const favorites = await Favorite.findAll();
      res.status(200).json(favorites);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postFav;
