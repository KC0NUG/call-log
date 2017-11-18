"use strict";

module.exports = function(sequelize, DataTypes) {
    var Contacts = sequelize.define("Contacts", {
        call_sign: DataTypes.INTEGER,
        contact_call_sign: DataTypes.STRING
    }, {
        timestamps: true
    });

    // Contacts.associate = function(models) {
    //     location.hasMany(models.location, {
    //         through: "Contacts",
    //         onDelete: "cascade"
    //     });
    // };

    return Contacts;
};