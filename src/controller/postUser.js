const { User } = require("../DB_connection"); //por qué se importa desde db en vez de desde models?

const postUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).send("Faltan datos");
    } else {
      const [user, created] = await User.findOrCreate({
        where: { email: email, password: password },
      });
      return res.status(200).json({ user, created });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postUser;
