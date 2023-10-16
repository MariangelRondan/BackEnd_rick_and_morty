const { Favorite } = require("../DB_connection"); //por qué se importa desde db en vez de desde models?

const postFav = async (req, res) => {
  try {
    const { id, name, origin, status, image, species, gender } = req.body;
    if (!id || !name || !origin || !status || !image || !species || !gender) {
      return res.status(401).send("Faltan datos");
    }
    await Favorite.findOrCreate({
      where: {
        id,
        name,
        origin,
        status,
        image,
        species,
        gender,
      },
    });
    const favorites = await Favorite.findAll();
    return res.status(200).json(favorites);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postFav;
