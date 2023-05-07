import {sequelize} from "../config/db";

const {Sequelize, DataTypes, where} = require("sequelize");


const User = sequelize.define("User", {
        userID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        vorname: {
            type: DataTypes.STRING

        },
        nachname: {
            type: DataTypes.STRING

        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        passwort: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    },
    {
        timestamps: false,
        tableName: 'User',
        underscored: false,
        freezeTableName: true
    });

function get_all() {
    return User.findAll();
}

function get_record(email) {
    return User.findOne({
        where:
            {email: email}
    });
}

function create(user) {
    return User.create(user)
}

function save(user, id) {
    return User.update({vorname: user.vorname, nachname: user.nachname, email: user.email}, {
        where: {
            userID: id
        }
    });
}

function remove(id) {
    return User.destroy({
        where:
            {userID: id}
    })
}


module.exports = {
    get_all,
    create,
    get_record,
    save,
    remove
};