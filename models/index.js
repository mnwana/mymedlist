const User = require("./User");
const List = require("./List");

// create associations
User.hasMany(List, {
  foreignKey: "user_id",
});

List.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});


module.exports = { User, List };
