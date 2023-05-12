import {sequelize} from "../config/db.js"
import {DataTypes} from "sequelize"


const cartContent = sequelize.define("warenkorbInhalt", {
    warenkorbID: {
        type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: false
    },produktID: {
        type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: false
    },
    anzahl: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement: false
    }
    },

{
    timestamps: false, tableName: 'Warenkorbinhalt', underscored: false, freezeTableName: true
})
function getAll() {
    return cartContent.findAll()
}

async function getCartContentByID(id) {
        return cartContent.findByPk(id)
}

function save(cartContent) {
    return cartContent.upsert(cartContent)
}

function removeByID(id) {
    return cartContent.destroy({
        where: {
            cartContentID: id
        }
    })
}

export {
    getCartContentByID, getAll, save, removeByID
}
