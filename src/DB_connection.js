require("dotenv").config();
const { Sequelize } = require("sequelize");
const dataBaseDeploy = process.env.DATA_BASE_DEPLOY;
const FavoriteModel = require("./models/Favorite");
const UserModel = require("./models/User");

const sequelize = new Sequelize(dataBaseDeploy, {
  logging: false,
  native: false,
});

FavoriteModel(sequelize);
UserModel(sequelize);

const { User, Favorite } = sequelize.models;

User.belongsToMany(Favorite, { through: "UserFavorite" });
Favorite.belongsToMany(User, { through: "UserFavorite" });

module.exports = {
  User,
  Favorite,
  conn: sequelize,
};
