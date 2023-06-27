import {sequelize} from "../config/db.js"
import {DataTypes} from "sequelize"

const User = sequelize.define("User", {
    userID: {
        type: DataTypes.STRING, primaryKey: true, allowNull: false
    }, vorname: {
        type: DataTypes.STRING
    }, nachname: {
        type: DataTypes.STRING
    }, isAdmin: {
        type: DataTypes.BOOLEAN, allowNull: false
    }
}, {
    timestamps: false, tableName: 'User', underscored: false, freezeTableName: true
})

function getAll() {
    return User.findAll()
}

function getByID(id) {
    return User.findOne({
        where: {
            userID: id
        }
    })
}

function save(user) {
    return User.upsert(user)
}

function removeByID(id) {
    return User.destroy({
        where: {userID: id}
    })
}

export {
    getAll, getByID, save, removeByID,User
}