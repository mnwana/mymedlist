const User = require("./User");
const List = require("./List");
const PatientDetails = require("./Patient-Details");
const ProviderDetails = require("./Provider-Details");

// create associations
User.belongsToMany(List, {
  through: PatientDetails,
  foreignKey: "user_id",
});

List.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
  through: PatientDetails,
  as: "patient_details"
});

User.hasOne(PatientDetails, {
  foreignKey: "user_id",
});

// PatientDetails.belongsTo(User, { foreignKey: "user_id" });

List.belongsTo(PatientDetails, {
  through: User,
  as: "user_table",
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

module.exports = { User, List, PatientDetails, ProviderDetails };
