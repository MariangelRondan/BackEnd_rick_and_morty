const { User } = require("../DB_connection");

const postUser = async (req, res) => {
  const { name, lastname, dateOfBirth, email, password } = req.body;
  try {
    if (!name || !lastname || !dateOfBirth || !email || !password) {
      return res.status(400).send("missing data");
    }
    const [user, isCreated] = await User.findOrCreate({
      where: {
        name: name,
        lastname: lastname,
        dateOfBirth: dateOfBirth,
        email: email,
        password: password,
      },
    });
    res.status(201).send({ user, created: isCreated });
  } catch (error) {
    res.status(500).json({ error: error.menssage });
  }
};

module.exports = postUser;

// const { User } = require("../DB_connection");

// const postUser = async (req, res) => {
//   const { email, password} = req.body;
//   try {
//     if (!email || !password) {
//       return res.status(400).send("missing data");
//     }
//     const [user, isCreated] = await User.findOrCreate({
//       where: {
//         email: email,
//         password: password,
//       },
//     });
//     res.status(201).send({ user, created: isCreated });
//   } catch (error) {
//     res.status(500).json({ error: error.menssage });
//   }
// };

// module.exports = postUser;
