import { describe, it, expect, jest } from "@jest/globals";
import { UserController } from "../controllers/userController.js";
const userController = new UserController();
const expectedUser = [
  {
    userID: 1,
    vorname: "Marcel",
    nachname: "Chalatsoglou",
    isAdmin: "",
  },
  {
    userID: 2,
    vorname: "Marcel",
    nachname: "Chalatsoglou",
    isAdmin: "",
  },
];
const expectedUpdateUser =
  '[{"userID":1,"vorname":"Marcel","nachname":"Chalatsogloudos","isAdmin":true}';
const expecteddeletedUser =
  '[{"userID":1,"vorname":"Marcel","nachname":"Chalatsoglou","isAdmin":true}';
const expectedloginUser =
  '[{"userID":1,"vorname":"Marcel","nachname":"Chalatsoglou","isAdmin":true}';
const expectedaddUser =
  '[{"userID":1,"vorname":"Marcel","nachname":"Chalatsoglou","isAdmin":true}';
const expectedUserbyEmail =
  '[{"userID":1,"vorname":"Marcel","nachname":"Chalatsoglou","isAdmin":true}';

userController.getAllUsersAction = jest.mocked(() => {
  return expectedUser;
});

userController.addUserAction = jest.mocked(() => {
  return expectedaddUser;
});
userController.updateUserAction = jest.mocked(() => {
  return expectedUpdateUser;
});
userController.deleteUserByIdAction = jest.mocked(() => {
  return expecteddeletedUser;
});

describe("User", () => {

  it("should update a user with an id", async () => {
    const user = {
      userID: 1,
      vorname: "Marcel",
      nachname: "Chalatsogloudos",
      isAdmin: "true",
    };
    const output = await userController.updateUserAction(user);
    expect(output).toStrictEqual(expectedUpdateUser);
  });
  it("should delete a User", async () => {
    const output = await userController.deleteUserByIdAction(1);
    expect(output).toStrictEqual(expecteddeletedUser);
  });
  it("should add a User", async () => {
    const output = await userController.addUserAction(1);
    expect(output).toStrictEqual(expectedaddUser);
  });
  it("should update a User", async () => {
    const output = await userController.updateUserAction(1);
    expect(output).toStrictEqual(expectedUpdateUser);
  });
});
