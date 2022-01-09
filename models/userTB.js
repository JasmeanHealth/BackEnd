const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userTB', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: "userTB_user_id_uindex"
    },
    user_pw: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    user_name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    user_birth: {
      type: DataTypes.DATE,
      allowNull: false
    },
    user_gender: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'userTB',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "userTB_user_id_uindex",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
