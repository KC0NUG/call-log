"use strict";

module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define("user", {
      call_sign: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING
  }, {
      timestamps: true
  });

  user.associate = function(models) {
      user.hasMany(models.Contacts, {
          // through: "Contacts",
          onDelete: "cascade"
        //   force: false
      });
  };

  return user;
};