const { User } = require("../DB_connection");

login = async (req, res) => {
  try {
    const { email, password } = req.query;

    if (!email || !password) return res.status(400).send("missing data");

    const user = await User.findOne({
      where: {
        email,
      },
    });
    if (!user) return res.status(404).send("User not found");

    if (user.password === password) {
      return res.status(200).json({ access: true });
    } else {
      return res.status(403).send("Incorrect password");
    }
  } catch (error) {
    return res.status(500).json({ error: error.menssage });
  }
};

module.exports = login;
