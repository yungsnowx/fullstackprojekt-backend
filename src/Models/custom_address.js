const {Sequelize,DataTypes} = require("sequelize");
const sequelize = new Sequelize("Webshop", "root", "my-secret-pw",{
    dialect: "mariadb",
    dialectOptions:{
        connectTimeout:10000,
    },
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    }
})

const address = sequelize.define("Adresse",{
    adresseID:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },
    Straße:{
        type:DataTypes.STRING,
        allowNull: true,
    },
    Hausnummer:{
        type:DataTypes.STRING,
        allowNull: true,
    },
    Ort:{
        type:DataTypes.STRING,
        allowNull: true,
    },
    PLZ:{
        type:DataTypes.INTEGER,
        allowNull: true,
    },
    Land:{
        type:DataTypes.STRING,
        allowNull:true
    }
});

function get_record(id){
    return address.findByPk(id);
}
function get_all(){
    return address.findAll();
}
function create(address){
    return address.create(address);
}
function save(address_in, id){
    return address.update({
        Straße:address_in.strasse,
        Hausnummer: address_in.hausnummer,
        Ort:address_in.ort,
        PLZ:address_in.plz,
        Land:address_in.land
    },{where:{
        addressID:id
        }});
}
function  remove(id){
    return address.destroy({
        where:{
            addressID:id
        }
    });
}

module.exports = {
    get_record,
    get_all,
    create,
    save,
    remove
}