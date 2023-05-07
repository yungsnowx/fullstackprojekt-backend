const express = require("express")
const bcrypt = require("bcrypt");
const route_user = express.Router();
const custom_user = require("../Models/custom_user")

route_user.post("/users/log_in", async (req, res) => {
    const user = {
        email: req.body.email,
        passwort: req.body.passwort
    };
    if (!user) {
        res.status(401).json({error: "incorrect user"});
    }
    const rlt = await custom_user.get_record(user.email)
        .then(data => {
            if (data) {
                if (bcrypt.compareSync(user.passwort, data.dataValues.passwort)) {
                    res.status(201).json({message: "Success"});
                } else {
                    res.status(401).json({message: "passwort not  correct"});
                }
            } else {
                res.status(401).json({message: "any account"})
            }

        })
        .catch(error => {
            res.status(401).json(error);
        });
});

route_user.post("/users/sign_in", async (req, res) => {
    const user = {
        vorname: req.body.vorname,
        nachname: req.body.nachname,
        email: req.body.email,
        passwort: req.body.passwort,
        isAdmin: false
    };
    if (!user) {
        res.status(401).json({message: "empty user"});
    }
    const rlt = await custom_user.get_record(user.email)
        .then(data => {
            console.log(data)
            if (!data) {
                user.passwort = bcrypt.hashSync(user.passwort, 10);
                console.log(user)
                const insert = custom_user.create(user)
                    .then(() => {
                        res.status(201).json({message: "Succes"});
                    })
                    .catch(error => {
                        res.status(401).json(error);
                    })
            } else {
                res.status(401).json({message: "already recorded"});
            }
        })
        .catch(error => {
            res.status(401).json(error);
        })
});


route_user.get("/users", async (req, res) => {
    const rlt = await custom_user.get_all()
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            res.status(400).json(error)
        })
});

route_user.put("/users/:id", async (req, res) => {
    const user_update = {
        vorname: req.body.vorname,
        nachname: req.body.nachname,
        email: req.body.email
    };
    console.log(user_update)
    const rlt = await custom_user.save(user_update, req.params.id)
        .then(() => {
            res.status(201).json({message: "success_1"});
        })
        .catch(error => {
            res.status(401).json(error);
        });
});

route_user.delete("/users/:id", async (req, res) => {
    const rlt = await custom_user.remove(req.params.id)
        .then(() => {
            res.status(201).json({message: "Succces"});
        })
        .catch(error => {
            res.status(401).json(error);
        })
});
module.exports = route_user;