import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

const Address = sequelize.define(
  "Kundenadresse",
  {
    userID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    adresseID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
  },
  {
    timestamps: false,
    tableName: "Kundenadresse",
    underscored: false,
    freezeTableName: true,
  }
);

function getAll() {
  return Address.findAll();
}

function getByUserId(id) {
  return Address.findOne({
    where: {
      userID: id,
    },
  });
}

function getByAddressId(id) {
  return Address.findOne({
    where: {
      adresseID: id,
    },
  });
}

function save(userAddress) {
  return Address.upsert(userAddress);
}

function removeByIDs(userID, addressID) {
  return Address.destroy({
    where: {
      userID: userID,
      addressID: addressID,
    },
  });
}

export { getAll, getByUserId, getByAddressId, save, removeByIDs };
