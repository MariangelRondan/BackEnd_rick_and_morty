const { User } = require("../DB_connection");

const postUser = async (req, res) => {
  const { name, lastname, dateOfBirth, email, password } = req.body;
  try {
   
    const user = await User.create({
      name,
      lastname,
      dateOfBirth,
      email,
      password,
    });
    
    res.status(201).send({ user, created: isCreated });
  } catch (error) {
  }
};

module.exports = postUser;
