import {sequelize} from "../config/db";

const {DataTypes} = require("sequelize");


const Adresse = sequelize.define("Adresse", {
    adresseID: {
        type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true
    },
    Straße: {
        type: DataTypes.STRING

    },
    Hausnummer: {
        type: DataTypes.STRING

    },
    Ort: {
        type: DataTypes.STRING

    },
    PLZ: {
        type: DataTypes.INTEGER

    },
    Land: {
        type: DataTypes.STRING

    }
});

function get(id) {
    return Adresse.findByPk(id);
}

function getAll() {
    return Adresse.findAll();
}

function save(adresse) {
    return Adresse.upsert(adresse)
}

function remove(id) {
    return Adresse.destroy({
        where: {
            addressID: id
        }
    });
}

module.exports = {
    get, getAll, save, remove, Adresse
}