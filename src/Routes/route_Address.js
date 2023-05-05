const db = require("../Models/db");
const express = require("express");
const bodyParser = require("body-parser");
const route_Address = express.Router()


route_Address.use(bodyParser.json());
route_Address.use(bodyParser.urlencoded({ extended: false }));

route_Address.post("/store_address",async (req, res) =>{
    const address ={
        strasse:req.body.strasse,
        hausnummer:req.body.hausnummer,
        ort:req.body.ort,
        plz:req.body.plz,
        land:req.body.land
    }
    const rlt = await db.pool.query(
        `insert into Adresse(Straße,Hausnummer, Ort,PLZ,Land) value(
            '${address.strasse}','${address.hausnummer}','${address.ort}',${address.plz},'${address.land}'
        )`
    )
        .then(() => {
            res.status(201).JSON({message:"Succes"});
        })
        .catch(error =>{
            res.status(401).JSON(error);
        });
});

route_Address.get("/get_address/:id", async(req, res) =>{
    const rlt = await db.pool.query(
        `Select Straße, Hausnummer,Ort,PLZ,Land from Adresse where addresseID=${req.params.id}`
    )
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            res.status(401).JSON(error);
        });
});
route_Address.put("/update_address/:id", async (req, res) =>{
    const address_update ={
        strasse:req.body.strasse,
        hausnummer:req.body.hausnummer,
        ort:req.body.ort,
        plz:req.body.plz,
        land:req.body.land
    }
    const rlt = await db.pool.query(
        `UPDATE Adresse SET Straße='${address_update.strasse}',Hausnummer='${address_update.hausnummer}',
                            Ort='${address_update.ort}',PLZ=${address_update.plz},
                            Land='${address_update.land}' where adresseID=${req.params.id}`
    )
        .then(() =>{
            res.status(201).JSON({message:"Success"});
        })
        .catch(error => {
            res.status(401).JSON(error);
        });
});

route_Address.delete("/delete_address/:id", async (req,res) =>{

    const  rlt = await  db.pool.query(
        `DELETE FROM Adresse where adresseID=${req.params.id}`
    )
        .then(() => {
            res.status(201).JSON({message:"Success"});
        })
        .catch(error =>{
            res.status(401).JSON(error);
        });
})

module.exports = route_Address