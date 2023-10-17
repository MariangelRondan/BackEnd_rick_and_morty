const { User } = require("../DB_connection");

const newUser = async (req, res) => {
  try {
    const { name, lastname, dateOfBirth, email, password } = req.query;

    if (!name || !lastname || !dateOfBirth || !email || !password)
      return res.status(400).send("missing data");

    const [user, isCreated] = await User.findOrCreate({
      where: {
        name: name,
        lastname: lastname,
        dateOfBirth: dateOfBirth,
        email: email,
        password: password,
      },
    });
    if (isCreated === false) {
      return res.send("Usuario ya existente");
    } else {
      return res.status(200).send(`${user.email} registrado con exito`);
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = newUser;
