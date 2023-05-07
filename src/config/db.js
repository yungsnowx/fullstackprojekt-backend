import {Sequelize} from 'sequelize'

const sequelize = new Sequelize("shop", "shop_user", "123456", {
    dialect: "mariadb",
    dialectOptions: {
        connectTimeout: 10000,
    },
    pool: {
        max: 5, min: 0, acquire: 30000, idle: 10000
    }
})

export {sequelize}