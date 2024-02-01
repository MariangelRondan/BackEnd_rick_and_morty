const { Favorite, User } = require("../DB_connection");

const postFav = async (req, res) => {
  try {
    const { id, name, origin, status, image, species, gender, user } = req.body;

    const usuario = await User.findOne({ where: { email: user } });

    if (usuario) {
      // Crear el nuevo favorito
      const createFavPromise = await Favorite.create({
        id,
        name,
        origin,
        status,
        image,
        species,
        gender,
      });

      // Asociar el favorito al usuario
      await usuario.addFavorite(createFavPromise);

      // Obtener todos los favoritos después de la operación
      const favAll = await Favorite.findAll();

      return res.status(200).json(favAll);
    } else {
      return res.status(404).json({ error: "Usuario no encontrado." });
    }
  } catch (error) {
    console.error("Error en la creación de favorito:", error);

    // Realiza un rollback de la transacción si es necesario

    return res.status(500).json({ error: error.message });
  }
};

module.exports = postFav;
