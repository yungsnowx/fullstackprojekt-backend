import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

const Address = sequelize.define(
  "Adresse",
  {
    adresseID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    strasse: {
      type: DataTypes.STRING,
    },
    hausnummer: {
      type: DataTypes.STRING,
    },
    ort: {
      type: DataTypes.STRING,
    },
    plz: {
      type: DataTypes.STRING,
    },
    land: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
    tableName: "Adresse",
    underscored: false,
    freezeTableName: true,
  }
);

function getByID(id) {
  return Address.findByPk(id);
}

function getAll() {
  return Address.findAll();
}

function save(address) {
  return Address.upsert(address);
}

function removeByID(id) {
  return Address.destroy({
    where: {
      adresseID: id,
    },
  });
}

export { getByID, getAll, save, removeByID };
