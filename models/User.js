const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
//create the user model with fields and columns
class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
      autoIncrement: true,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
      autoIncrement: true,
    },
    dateofbirth: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;
