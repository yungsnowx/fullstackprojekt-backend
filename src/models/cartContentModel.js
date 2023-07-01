import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const CartContent = sequelize.define(
  "Warenkorbinhalt",
  {
    warenkorbinhaltID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    warenkorbID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
      unsigned: true,
    },
    produktID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
      unsigned: true,
    },
    anzahl: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "Warenkorbinhalt",
    underscored: false,
    freezeTableName: true,
  }
);

function getAll() {
  return CartContent.findAll();
}

async function getByID(id) {
  return CartContent.findByPk(id);
}

async function getByCartId(id) {
  return CartContent.findAll({
    where: {
      warenkorbID: id,
    },
  });
}

function create(cartContent) {
  return CartContent.create(cartContent);
}

function save(cartContent) {
  return CartContent.upsert(cartContent);
}

function removeByID(id) {
  return CartContent.destroy({
    where: {
      warenkorbinhaltID: id,
    },
  });
}

export { getByID, getByCartId, getAll, create, save, removeByID };
