const { User } = require("../DB_connection"); //desde aca o desde models?

const login = async (req, res) => {
  try {
    const { email, password } = req.query;
    if (!email || !password) {
      return res.status(400).send("Faltan datos");
    } else {
      const user = await User.findOne({ where: { email: email } });
      if (!user) {
        return res.status(404).send("Usuario no encontrado");
      }
      if (user.password !== password) {
        return res.status(403).send("Contraseña incorrecta");
      } else {
        return res.status(200).json({
          access: true,
        });
      }
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = login;