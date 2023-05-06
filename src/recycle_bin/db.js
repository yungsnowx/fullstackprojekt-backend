const mariadb = require("mariadb");

// Nutzer muss in der Datenbank erstellt werden
const pool = mariadb.createPool({
    host: "127.0.0.1",
    port: 3306,
    user: "shop_user",
    password: "123456",
    database: "shop"
})

module.exports = Object.freeze({
    pool: pool
});