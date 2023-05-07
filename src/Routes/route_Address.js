const express = require("express");
const route_Address = express.Router()
const costum_address =  require("../Models/custom_address")
route_Address.post("/address",async (req, res) =>{
    const address ={
        strasse:req.body.strasse,
        hausnummer:req.body.hausnummer,
        ort:req.body.ort,
        plz:req.body.plz,
        land:req.body.land
    }
    const rlt = await costum_address.create(address)
        .then(() => {
            res.status(201).JSON({message:"Succes"});
        })
        .catch(error =>{
            res.status(401).JSON(error);
        });
});

route_Address.get("/address/:id", async(req, res) =>{
    const rlt = await costum_address.get_record(req.params.id)
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            res.status(401).JSON(error);
        });
});

route_Address.get("/address",async (req,res ) =>{
    const rlt = await costum_address.get_all()
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            res.status(401).JSON(error);
        });
})
route_Address.put("/address/:id", async (req, res) =>{
    const address_update ={
        strasse:req.body.strasse,
        hausnummer:req.body.hausnummer,
        ort:req.body.ort,
        plz:req.body.plz,
        land:req.body.land
    }
    const rlt = await costum_address.save(address_update,req.params.id)
        .then(() =>{
            res.status(201).JSON({message:"Success"});
        })
        .catch(error => {
            res.status(401).JSON(error);
        });
});

route_Address.delete("/address/:id", async (req,res) =>{

    const  rlt = await  costum_address.remove(id)
        .then(() => {
            res.status(201).JSON({message:"Success"});
        })
        .catch(error =>{
            res.status(401).JSON(error);
        });
})

module.exports = route_Address