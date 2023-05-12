import {sequelize} from "../config/db.js"
import {DataTypes} from "sequelize"

const Order = sequelize.define("Bestellung", {
    bestellID: {
        type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true
    },warenkorbID: {
        type: DataTypes.INTEGER, allowNull: false, foreignKey: true, autoIncrement: false
    },lieferadresse: {
        type: DataTypes.INTEGER, allowNull: false, foreignKey: true, autoIncrement: false
    },rechnungsadresse: {
        type: DataTypes.INTEGER, allowNull: false, foreignKey: true, autoIncrement: false
    },
    bezahlt: {
        type: DataTypes.TINYINT, autoIncrement: false, default:null
    },
    datum: {
        type: DataTypes.DATE,
    }
}, {
    timestamps: false, tableName: 'Bestellung', underscored: false, freezeTableName: true
})

function getAllOrder() {
    return Order.findAll()
}

function getOrderByID(id) {
    return Order.findByPk(id)
}

function saveOrder(order) {
    return Order.upsert(order)
}

function removeOrderByID(id) {
    return Order.destroy({
        where: {
            orderID: id
        }
    })
}

export {
    getOrderByID, getAllOrder, saveOrder, removeOrderByID
}