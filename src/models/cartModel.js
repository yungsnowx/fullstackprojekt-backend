import {sequelize} from "../config/db.js"
import {DataTypes} from "sequelize"

const Cart = sequelize.define("Warenkorb", {
    warenkorbID: {
        type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true
    },userID: {
        type: DataTypes.INTEGER, allowNull: false, foreignKey: true, autoIncrement: false
    }},

{
    timestamps: false, tableName: 'Warenkorb', underscored: false, freezeTableName: true
})
function getAll() {
    return Cart.findAll()
}

function getCartByID(id) {
    return Cart.findByPk(id)
}

function save(cart) {
    return Cart.upsert(cart)
}

function removeByID(id) {
    return Cart.destroy({
        where: {
            cartID: id
        }
    })
}

export {
    getCartByID, getAll, save, removeByID
}