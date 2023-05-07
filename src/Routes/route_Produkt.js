const db = require("../recycle_bin/db");
const express = require("express")
const route_produkt = express.Router()
const custom_produkt = require("../Models/custom_produkt")
route_produkt.get("/produkt", async (req, res) => {
    const result = await db.pool.query("SELECT * FROM Produkt");
    res.send(result);
});

route_produkt.post("/produkt", async (req, res) => {
    let produkt = req.body;
    const result = await db.pool.query(
        "INSERT INTO Produkt(produktname, produktbeschreibung) VALUES (?,?)",
        [produkt.produktname, produkt.produktbeschreibung]
    );
    res.status(200).send("Successful.");
});

route_produkt.put("/produkt", async (req, res) => {
    let produkt = req.body;
    const result = await db.pool.query(
        "UPDATE Produkt SET produktname = ?, produktbeschreibung = ? WHERE produktID = ?",
        [produkt.produktname, produkt.produktbeschreibung, produkt.produktID]
    );
    res.status(200).send("Successful.");
});

route_produkt.delete("/produkt", async (req, res) => {
    let id = req.query.id;
    const result = await db.pool.query(
        "DELETE FROM Produkt WHERE produktID = ?",
        [id]
    );
    res.status(200).send("Successful.");
});

module.exports = route_produkt;