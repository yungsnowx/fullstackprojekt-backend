import {sequelize} from "../config/db.js"
import {DataTypes} from "sequelize"

const Cart = sequelize.define("Warenkorb", {
    warenkorbID: {
        type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true
    }, userID: {
        type: DataTypes.INTEGER, allowNull: false, foreignKey: true
    }
}, {
    timestamps: false, tableName: 'Warenkorb', underscored: false, freezeTableName: true
})

function getAll() {
    return Cart.findAll()
}

function getByID(id) {
    return Cart.findByPk(id)
}

function getByUserId(id) {
    return Cart.findOne({
        where: {
            userID: id
        }
    })
}

function save(cart) {
    return Cart.upsert(cart)
}

function removeByID(id) {
    return Cart.destroy({
        where: {
            warenkorbID: id
        }
    })
}

export {
    getByID, getByUserId, getAll, save, removeByID
}