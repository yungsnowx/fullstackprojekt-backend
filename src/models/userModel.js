import {sequelize} from "../config/db.js"
import {DataTypes} from "sequelize"

const User = sequelize.define("User", {
    userID: {
        type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true
    }, vorname: {
        type: DataTypes.STRING
    }, nachname: {
        type: DataTypes.STRING
    }, email: {
        type: DataTypes.STRING, allowNull: false
    }, passwort: {
        type: DataTypes.STRING, allowNull: false
    }, isAdmin: {
        type: DataTypes.BOOLEAN, allowNull: false
    }
}, {
    timestamps: false, tableName: 'User', underscored: false, freezeTableName: true
})

function getAll() {
    return User.findAll()
}

function getByEmail(email) {
    return User.findOne({
        where: {email: email}
    })
}

function save(user) {
    return User.upsert(user)
}

function saveWithoutPassword(user) {
    return User.update({
        vorname: user.vorname,
        nachname: user.nachname,
        email: user.email
    }, {where: {userID: user.userID}})
}

function removeByID(id) {
    return User.destroy({
        where: {userID: id}
    })
}

export {
    getAll, getByEmail, save, saveWithoutPassword, removeByID,User
}