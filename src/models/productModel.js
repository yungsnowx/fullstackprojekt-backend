import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const Product = sequelize.define(
  "Produkt",
  {
    produktID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    produktname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    produktbeschreibung: {
      type: DataTypes.STRING,
    },
    preis: {
      type: DataTypes.DOUBLE,
    },
    bild: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
    tableName: "Produkt",
    underscored: false,
    freezeTableName: true,
  }
);

function getAll() {
  return Product.findAll();
}

function getByID(id) {
  return Product.findByPk(id);
}

function save(product) {
  return Product.upsert(product);
}

function removeByID(id) {
  return Product.destroy({
    where: {
      produktID: id,
    },
  });
}

export { getByID, getAll, save, removeByID };
