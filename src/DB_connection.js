require("dotenv").config();
const { Sequelize } = require("sequelize");
// const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const FavoriteModel = require("./models/Favorite");
const UserModel = require("./models/User");
const dataBaseDeploy = process.env.DATA_BASE_DEPLOY;

// const sequelize = new Sequelize(
//   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
//   { logging: false, native: false }
// );

const sequelize = new Sequelize(dataBaseDeploy, {
  logging: false,
  native: false,
});

FavoriteModel(sequelize);

UserModel(sequelize);

const { User, Favorite } = sequelize.models;

User.belongsToMany(Favorite, { through: "UserFavorite", timestamps: false });
Favorite.belongsToMany(User, { through: "UserFavorite", timestamps: false });

module.exports = {
  User,
  Favorite,
  conn: sequelize,
};
