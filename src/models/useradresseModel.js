import {sequelize} from "../config/db.js"
import {DataTypes, where} from "sequelize"
import {User} from "./userModel.js"
import {Address} from "./addressModel.js";

const user_Adresse = sequelize.define("Kundenadresse",{
    userID:{
        type:DataTypes.INTEGER,
        allowNull: false,
        primaryKey:true
    },
    adresseID:{
        type:DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    }
},
    {
        timestamps: false,
        tableName: 'Kundenadresse',
        underscored: false,
        freezeTableName: true
    })
User.hasOne(user_Adresse,{foreignKey:'userID'});
user_Adresse.belongsTo(User,{foreignKey:"userID"});

Address.hasMany(user_Adresse,{foreignKey:'adresseID'});
user_Adresse.belongsTo(Address,{foreignKey:"adresseID"});
function getAll(){
    return user_Adresse.findAll({include:[User,Address]})
}
function getID_User(id){
    return user_Adresse.findOne({include:[User,Address]},{where:{
        userID:id
        }});
}
function getID_Address(id){
    return user_Adresse.findOne({include:[User,Address]},{where:{
            addressID:id
        }});
}
function  save(user_address_in){
    return user_Adresse.upsert(user_address_in);
}
function  create(user_address_in){
    return user_Adresse.create(user_address_in);
}
function deleteID(userID,addressID){
    return user_Adresse.destroy({where:{
            userID:userID,addressID:addressID
        }})
}
export {
    getAll,getID_User,getID_Address,save,create,deleteID
}