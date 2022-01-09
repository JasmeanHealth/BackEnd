var DataTypes = require("sequelize").DataTypes;
var _diseaseLogTB = require("./diseaseLogTB");
var _userTB = require("./userTB");

function initModels(sequelize) {
  var diseaseLogTB = _diseaseLogTB(sequelize, DataTypes);
  var userTB = _userTB(sequelize, DataTypes);


  return {
    diseaseLogTB,
    userTB,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
