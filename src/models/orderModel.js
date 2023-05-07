import {sequelize} from "../config/db.js"
import {DataTypes, DECIMAL, TINYINT} from "sequelize"

const Bestellung = sequelize.define("Bestellung", {
    bestellID: {
        type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true, unsigned: true
    }, warenkorbID: {
        type: DataTypes.INTEGER, allowNull: false, foreignKey: true, unsigned: true
    }, lieferadresse: {
        type: DataTypes.INTEGER, allowNull: false, foreignKey: true, unsigned: true
    },
    rechnungsadresse: {
        type: DataTypes.INTEGER, allowNull: false, foreignKey: true, unsigned: true
    },
    bezahlt: {
        type: DataTypes.TINYINT, allowNull: true ,default: null
    },
    datum: {
        type: DataTypes.TIME, /*'Nachfragen wegen Datatypes'*/
    },
}, {
    timestamps: true, tableName: 'Bestellung', underscored: false, freezeTableName: true
})

function getAll() {
    return Bestellung.findAll()
}

function getByID(id) {
    return Bestellung.findByPk(id)
}

function save(product) {
    return Bestellung.upsert(product)
}

function removeByID(id) {
    return Bestellung.destroy({
        where: {
            produktID: id
        }
    })
}

export {
    getByID, getAll, save, removeByID
}