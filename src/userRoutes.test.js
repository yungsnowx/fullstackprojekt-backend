import request from "supertest";
import {router} from "./routes/userRoutes.js";


//TODO: Nachfragen wie man hier einen Mock erstellt damit nicht immer die Datenbank angesprochen wird
const expectedUsers = [
    {
        "email": "chalatsoglou-dimitrios@web.de",
        "isAdmin": true,
        "nachname": "Chalatsoglou",
        "passwort": "ilovejenniferaniston",
        "userID": 1,
        "vorname": "Dimitrios"
    },
    {
        "email": "lovelock@forlive.de",
        "isAdmin": false,
        "nachname": "Lovelock",
        "passwort": "vibesitinman",
        "userID": 2,
        "vorname": "Leon"
    },
    {
        "email": "muani@yahoo.de",
        "isAdmin": false,
        "nachname": "Tsetepe-Muani",
        "passwort": "gimmesome",
        "userID": 3,
        "vorname": "Bong"
    },
    {
        "email": "helpmme@please.uk",
        "isAdmin": false,
        "nachname": "Helpmme",
        "passwort": "hello",
        "userID": 4,
        "vorname": "Adam"
    },
    {
        "email": "asche@gmail.com",
        "isAdmin": false,
        "nachname": "die Nummer Eins",
        "passwort": "wasbleibtistasche",
        "userID": 5,
        "vorname": "Aschkobar"
    }
];

const newUser = {
    "userID": 9,
    "email": "kingofrap@web.de",
    "isAdmin": false,
    "nachname": "Mathers",
    "passwort": "mockingbird",
    "vorname": "Marshall"
}

const updatedUser = {
    "userID": 9,
    "email": "neuemail@web.de", //e-mail updated
    "isAdmin": false,
    "nachname": "Mathers",
    "passwort": "$2b$10$SwTBTmgjmrCwqUANsWADoumRtRfUOpHqynzjFe7VU9MCgldVQY./u",
    "vorname": "Marshall"
};

const usersAfterDelete = [
    {
        "userID": 3,
        "vorname": "Bong",
        "nachname": "Tsetepe-Muani",
        "email": "muani@yahoo.de",
        "passwort": "gimmesome",
        "isAdmin": false
    },
    {
        "userID": 4,
        "vorname": "Adam",
        "nachname": "Helpmme",
        "email": "helpmme@please.uk",
        "passwort": "hello",
        "isAdmin": false
    },
    {
        "userID": 5,
        "vorname": "Aschkobar",
        "nachname": "die Nummer Eins",
        "email": "asche@gmail.com",
        "passwort": "wasbleibtistasche",
        "isAdmin": false
    },
    {
        "userID": 9,
        "vorname": "Marshall",
        "nachname": "Mathers",
        "email": "kingofrap@web.de",
        "passwort": "$2b$10$CaSwnGz40erEL5GhoGDiWOCde1IklPan5VtTEeSGzOB6OThUyxCVy",
        "isAdmin": false
    }];

describe("User Router", () => {
    it("should get all users", async () => {
        const response = await request(router).get("/users");
        expect(response.status).toBe(200);
        expect(response.body).toEqual(expectedUsers);
    });

    it("should add a user", async () => {
        const response = await request(router)
            .post("/users")
            .send(newUser)
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
        expect(response.status).toBe(200);
    });

    it("should update a user", async () => {
        const response = await request(router).put("/users",)
            .send({
                "userID": 9,
                "email": "neuemail@web.de"
            })
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
        console.log(response.text)
        expect(response.status).toBe(200);
        expect(response.body).toEqual(updatedUser);
    });

    it("should delete a user by ID", async () => {
        const response = await request(router).delete("/users/1")
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
        expect(response.status).toBe(200);
        expect(response.body).toEqual(usersAfterDelete);
    });
});
