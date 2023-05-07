const {Sequelize, DataType, DataTypes} = require("sequelize");

const sequelize = new Sequelize("Webshop", "root", "my-secret-pw", {
    dialect: "mariadb",
    dialectOptions: {
        connectTimeout: 10000,
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

const produkt = new sequelize.define("Produkt",{
    produktID:{
        type: DataTypes.INTEGER,
        allowNull:false,
        primaryKey: true,
        autoIncrement:true
    },
    produktname:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    produktbeschreibung:{
        type:DataTypes.STRING
    },
    preis:{
        type: DataTypes.DOUBLE,
        allowNull:false
    }

},
    {
        timestamps: false,
        tableName: 'User',
        underscored: false,
        freezeTableName: true
    });

function get_all(){
    return produkt.findAll();
}
function  get_record(id){
    return produkt.findByPk(id);
}
function create(produkt_in){
    produkt.create(produkt_in);
}
function save(produkt_in,id){
    return  produkt.update({
        produktname:produkt_in.produktname,
        produktbeschreibung:produkt_in.produktbeschreibung,
        preis:produkt_in.preis
    },{where:{
        produktID:id
        }});
}
function remove(id){
    return produkt.destroy({where:{
        produktID:id
        }});
}

module.exports = {
    get_all,
    get_record,
    create,
    save,
    remove
}