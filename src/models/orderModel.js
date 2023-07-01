import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const Order = sequelize.define(
  "Bestellung",
  {
    bestellID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    warenkorbID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
      autoIncrement: false,
    },
    lieferadresse: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
      autoIncrement: false,
    },
    rechnungsadresse: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
      autoIncrement: false,
    },
    bezahlt: {
      type: DataTypes.BOOLEAN,
      autoIncrement: false,
      default: null,
    },
    datum: {
      type: DataTypes.DATE,
    },
  },
  {
    timestamps: false,
    tableName: "Bestellung",
    underscored: false,
    freezeTableName: true,
  }
);

function getAll() {
  return Order.findAll();
}

function getByID(id) {
  return Order.findByPk(id);
}

function save(order) {
  return Order.upsert(order);
}

function removeByID(id) {
  return Order.destroy({
    where: {
      orderID: id,
    },
  });
}

export { getAll, getByID, removeByID, save };
