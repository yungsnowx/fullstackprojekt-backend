const express = require("express");
const adressRoutes = express.Router()
const costum_address = require("../models/adressModel")
adressRoutes.post("/address", async (req, res) => {
    const address = {
        strasse: req.body.strasse,
        hausnummer: req.body.hausnummer,
        ort: req.body.ort,
        plz: req.body.plz,
        land: req.body.land
    }
    const rlt = await costum_address.create(address)
        .then(() => {
            res.status(201).JSON({message: "Succes"});
        })
        .catch(error => {
            res.status(401).JSON(error);
        });
});

adressRoutes.get("/address/:id", async (req, res) => {
    const rlt = await costum_address.get_record(req.params.id)
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            res.status(401).JSON(error);
        });
});

adressRoutes.get("/address", async (req, res) => {
    const rlt = await costum_address.get_all()
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            res.status(401).JSON(error);
        });
})
adressRoutes.put("/address/:id", async (req, res) => {
    const address_update = {
        strasse: req.body.strasse,
        hausnummer: req.body.hausnummer,
        ort: req.body.ort,
        plz: req.body.plz,
        land: req.body.land
    }
    const rlt = await costum_address.save(address_update, req.params.id)
        .then(() => {
            res.status(201).JSON({message: "Success"});
        })
        .catch(error => {
            res.status(401).JSON(error);
        });
});

adressRoutes.delete("/address/:id", async (req, res) => {

    const rlt = await costum_address.remove(id)
        .then(() => {
            res.status(201).JSON({message: "Success"});
        })
        .catch(error => {
            res.status(401).JSON(error);
        });
})

module.exports = adressRoutes