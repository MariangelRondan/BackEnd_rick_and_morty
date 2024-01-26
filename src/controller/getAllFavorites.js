const { User } = require("../DB_connection");

const getAllFavorites = async (req, res) => {
  try {
    const { user } = req.params;
    const usuario = await User.findOne({ where: { email: user } });
    if (usuario) {
      const favoritos = await usuario.getFavorites();
      res.status(200).json(favoritos);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = getAllFavorites;
