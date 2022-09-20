const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
//create the user model with fields and columns
class ProviderDetails extends Model {}

ProviderDetails.init(
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
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    usertype: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    institution: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "provider-details",
  }
);

module.exports = ProviderDetails;
