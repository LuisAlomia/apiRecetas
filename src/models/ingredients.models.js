const { DataTypes } = require("sequelize");
const { dbSequelize } = require("../database");
const Types = require("./types.models");

const Ingredients = dbSequelize.define(
  "ingredients",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    typeId: {
      type: DataTypes.INTEGER,
      field: "type_id",
      references: {
        key: "id",
        model: Types,
      },
    },
    urlImg: {
      type: DataTypes.STRING,
      field: "url_img",
    },
  },
  { timestamps: false }
);

module.exports = Ingredients;
