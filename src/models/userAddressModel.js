import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

const UserAddress = sequelize.define(
  "Kundenadresse",
  {
    userID: {
      type: DataTypes.STRING,
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
  return UserAddress.findAll();
}

function getByUserId(id) {
  return UserAddress.findOne({
    where: {
      userID: id,
    },
  });
}

function getByAddressId(id) {
  return UserAddress.findOne({
    where: {
      adresseID: id,
    },
  });
}

function save(userAddress) {
  return UserAddress.upsert(userAddress);
}

function removeByIDs(userID, addressID) {
  return UserAddress.destroy({
    where: {
      userID: userID,
      addressID: addressID,
    },
  });
}

export { getAll, getByUserId, getByAddressId, save, removeByIDs };
