import {sequelize} from "../config/db.js"
import {DataTypes, where} from "sequelize"

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

function getAll(){
    return user_Adresse.findAll()
}
function getByID_User(id){
    return user_Adresse.findOne({where:{
        userID:id
        }});
}
function getByID_Address(id){
    return user_Adresse.findOne({where:{
            adresseID:id
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
    getAll,getByID_User,getByID_Address,save,create,deleteID
}