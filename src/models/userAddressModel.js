import {sequelize} from "../config/db.js"
import {DataTypes} from "sequelize"

const UserAdress = sequelize.define("Kundenadresse", {
    userID: {
        type: DataTypes.INTEGER, allowNull: false, primaryKey: true
    }, adresseID: {
        type: DataTypes.INTEGER, allowNull: false, primaryKey: true
    }
}, {
    timestamps: false, tableName: 'Kundenadresse', underscored: false, freezeTableName: true
})

function getAll() {
    return UserAdress.findAll()
}

function getByUserId(id) {
    return UserAdress.findOne({
        where: {
            userID: id
        }
    });
}

function getByAddressId(id) {
    return UserAdress.findOne({
        where: {
            adresseID: id
        }
    });
}

function save(userAddress) {
    return UserAdress.upsert(userAddress);
}

function removeByIDs(userID, addressID) {
    return UserAdress.destroy({
        where: {
            userID: userID, addressID: addressID
        }
    })
}

export {
    getAll, getByUserId, getByAddressId, save, removeByIDs
}