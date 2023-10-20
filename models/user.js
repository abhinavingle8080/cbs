'use strict';

const bcrypt = require("bcrypt");
const bcrypt_p = require("bcrypt-promise");
const { TE, to } = require('../services/utilServices');

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // Define associations here if needed
    }
  }

  User.init({
    title: {
      type: DataTypes.STRING,
      allowNull: true
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false, // Change to 'false' if password is required
    },
    country_phone_code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    phone_no: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    gender: {
      type: DataTypes.ENUM('Male', 'Female', 'Other'),
      allowNull: false, // Change to 'true' if gender is required
    },
    date_of_birth: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    role_id: {
      type: DataTypes.INTEGER,
      references: { model: "roles", key: "id" },
      allowNull: false,
      onDelete: "CASCADE"
    },
    google_id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    facebook_id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    apple_id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    login_type: {
      type: DataTypes.ENUM('NOR', 'GGL', 'APL', 'FCB'),
      allowNull: false,
    },
    profile_image: {
      type: DataTypes.STRING,
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM("Pending", "Approved", "Rejected", "Invalid"),
      defaultValue: "Pending",
      allowNull: false,
    },
    reason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
  }, {
    sequelize,
    modelName: 'User',
    tableName: "users",
    deletedAt: "deleted_at",
    paranoid: true,
    underscored: true,
  });


  User.associate = function (models) {
    User.belongsTo(models.Role, {
      sourceKey: 'id',
      foreignKey: 'role_id',
      constraints: false,
      as: 'Role'
    });
  }

  User.associate = function (models) {
    User.belongsTo(models.Role, {
      sourceKey: 'id',
      foreignKey: 'role_id',
      constraints: false,
      as: 'Role'
    });
  }

  return User;
};
