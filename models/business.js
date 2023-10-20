'use strict';

const { Model , DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Business extends Model {}

  Business.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'user', key: 'id' },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    business_logo_img: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    reg_no: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    reg_certificate_img: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    google_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    fb_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    linkedln_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    insta_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    isApproved: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    isBlocked: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    community_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: 'Business',
    tableName: 'businesses',
    underscored: true,
  });

  Business.associate = function (models) {
    Business.belongsTo(models.User, {
      sourceKey: 'id',
      foreignKey: 'user_id',
      as: 'User',
    });
  };

  return Business;
};
