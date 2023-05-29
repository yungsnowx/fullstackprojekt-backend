import request from "supertest";
import {router} from "./routes/userRoutes.js";


describe("User Router", () => {
    it("should get all users", async () => {
        const response = await request(router).get("/users");
        expect(response.status).toBe(200);
        expect(response.body).toEqual(
                [
                    {
                        "userID": 1,
                        "vorname": "Dimitrios",
                        "nachname": "Chalatsoglou",
                        "email": "chalatsoglou-dimitrios@web.de",
                        "passwort": "$2b$10$W2H.q8j0o86xfNMZzfBqk.yH9PHONnhmxEszvrriC2P0GTDQDmueq",
                        "isAdmin": false
                    },
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
                    }]
        );
    });


    it("should add a user", async () => {
        const response = await request(router)
            .post("/users")
            .send({
                "userID": 9,
                "email": "kingofrap@web.de",
                "isAdmin": false,
                "nachname": "Mathers",
                "passwort": "mockingbird",
                "vorname": "Marshall"
            })
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
        expect(response.status).toBe(200);
    });

    it("should delete a user by ID", async () => {
        const response = await request(router).delete("/users/1");
        expect(response.status).toBe(200);
    });
});
