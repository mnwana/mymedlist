const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
//create the user model with fields and columns
class PatientDetails extends Model {}

PatientDetails.init(
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
    dateofbirth: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    usertype: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    recentlistid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "patient_details",
  }
);

module.exports = PatientDetails;
