const db = require("../db");
const express = require("express")
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");

const route_user = express.Router();
route_user.use(bodyParser.json());
route_user.use(bodyParser.urlencoded({ extended: false }));

route_user.post("/log_in",async (req, res) =>{
    const user = {
        email:req.body.email,
        passwort: req.body.passwort
    };
    if(!user){
        res.status(401).JSON({error:"incorrect user"});
    }
    const result = await db.pool.query(
        `SELECT passwort from User where email='${user.email}'`
    )
        .then((data) =>{
            if( bcrypt.compareSync(user.passwort, data[0].passwort)){
                res.status(200).JSON({message:"Succesfull"});
            }
            else{
                res.status(401).JSON({message:"the password is false"});
            }
        })
        .catch(error=>{
            res.status(401).JSON(error);
        })
});

route_user.post("/sign_in",async (req,res)=>{
    const user ={
        vorname: req.body.vorname,
        nachname: req.body.nachname,
        email:req.body.email,
        passwort: req.body.passwort
    };
    if(!user){
        res.status(401).json({message:"empty user"});
    }
    const result = await  db.pool.query(
        `select email from User where email='${user.email}'`
    )
        .then( async (data) =>{
            if(!data){
                const password = bcrypt.compareSync(user.passwort,10);
                const rlt = await db.pool.query(
                    `insert into User(vorname,nachname,email,passwort) VALUES(${user.vorname},${user.nachname}
                    ,${user.email},${password})`
                )
                    .then(() =>{
                        res.status(201).JSON({message:"save user"});
                    })
                    .catch((error) =>{
                        res.status(401).JSON(error);
                    })
            }
        })
        .catch((error) =>{
            res.status(401).JSON(error);
        });
});

route_user.get("/all_user",async (req,res) =>{
    const rlt = await db.pool.query(
        `SELECT * from User`
    )
        .then((data) => {
            res.send(data);
        })
        .catch(error =>{
            res.status(401).JSON(error);
        });
});

route_user.put("/user_modified/:id", async (req,res) =>{
    const user_update = {
        vorname: req.body.vorname,
        nachname:req.body.nachname,
        email:req.body.req
    };
    const rlt = await db.pool.query(
        `UPDATE User set vorname='${user_update.vorname}', nachname='${user_update.nachname}',
                email='${user_update.email}'`
    )
        .then(() =>{
            res.status(201).JSON({message:"Success"});
        })
        .catch(error =>{
            res.status(401).JSON(error);
        });
});

route_user.delete("/user_delete/:id",async (req,res) =>{
    const rlt = await db .pool.query(
        `delete from User where userID=${req.params.id}`
    )
        .then(() =>{
            res.status(200).JSON({message:"Success"});
        })
        .catch(error => {
            res.status(401).JSON(error);
        });
});
module.exports = route_user;
