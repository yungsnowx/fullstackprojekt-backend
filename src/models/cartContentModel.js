import {sequelize} from "../config/db.js"
import {DataTypes} from "sequelize"

const CartContent = sequelize.define("Warenkorbinhalt", {
    warenkorbinhaltID: {
        type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true
    }, warenkorbID: {
        type: DataTypes.INTEGER, allowNull: false, foreignKey: true, unsigned: true
    }, produktID: {
        type: DataTypes.INTEGER, allowNull: false, foreignKey: true, unsigned: true
    }, anzahl: {
        type: DataTypes.INTEGER, allowNull: false
    }
}, {
    timestamps: false, tableName: 'Warenkorbinhalt', underscored: false, freezeTableName: true
})

function getAll() {
    return CartContent.findAll()
}

async function getByID(id) {
    return CartContent.findByPk(id)
}

function save(cartContent) {
    return CartContent.upsert(cartContent)
}

function removeByID(id) {
    return CartContent.destroy({
        where: {
            warenkorbinhaltID: id
        }
    })
}

export {
    getByID, getAll, save, removeByID
}
