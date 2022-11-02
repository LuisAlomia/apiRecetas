const { DataTypes } = require("sequelize");
const { dbSequelize } = require("../database");
const Categories = require("./categories.models");
const Users = require("./users.model");

const Recipes = dbSequelize.define("recipes", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    unique: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  urlImg: {
    type: DataTypes.STRING,
    field: "url_img",
  },
  time: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  portions: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  userId: {
    type: DataTypes.UUID,
    field: "user_id",
    references: {
      key: "id",
      model: Users,
    },
  },
  categoryId: {
    type: DataTypes.INTEGER,
    field: "category_id",
    references: {
      key: "id",
      model: Categories,
    },
  },
  origin: {
    type: DataTypes.STRING,
  },
  likes: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
});

module.exports = Recipes;
