const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcryptjs");
const connection = require("./db");

class Roulette extends Model {}

Roulette.init(
  {
    number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: connection,
  }
);