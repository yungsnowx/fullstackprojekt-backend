import request from "supertest";
import { router } from "./routes/userRoutes.js";
import {addUserAction} from "./controllers/userController.js";

describe("User Router", () => {
  it("should get all users", async () => {
    const response = await request(router).get("/users");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      expect.arrayContaining([
        {
          email: "lovelock@forlive.de",
          isAdmin: false,
          nachname: "Lovelock",
          passwort: "vibesitinman",
          userID: 2,
          vorname: "Leon",
        },
        {
          email: "muani@yahoo.de",
          isAdmin: false,
          nachname: "Tsetepe-Muani",
          passwort: "gimmesome",
          userID: 3,
          vorname: "Bong",
        },
        {
          email: "helpmme@please.uk",
          isAdmin: false,
          nachname: "Helpmme",
          passwort: "hello",
          userID: 4,
          vorname: "Adam",
        },
        {
          email: "asche@gmail.com",
          isAdmin: false,
          nachname: "die Nummer Eins",
          passwort: "wasbleibtistasche",
          userID: 5,
          vorname: "Aschkobar",
        },
      ])
    );
  });

  it("should add a user", async () => {
    const userData = {
      "email": "chalatsoglou-dimitrios@web.de",
      "isAdmin": true,
      "nachname": "Chalatsoglou",
      "passwort": "ilovejenniferaniston",
      "userID": 1,
      "vorname": "Dimitrios",
    };
    const response = await request(router).post("/users",userData);
    expect(response.status).toBe(200);
  });

  it("should update a user", async () => {
    const response = await request(router).put("/users");
    expect(response.status).toBe(200);
  });

  it("should delete a user by ID", async () => {
    const response = await request(router).delete("/users/1");
    expect(response.status).toBe(200);
  });
});
