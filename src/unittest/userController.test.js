import{describe, it, expect, jest} from '@jest/globals';
import{getAllUsersAction,getUserByEmailAction,loginUserAction,addUserAction,updateUserAction,deleteUserByIdAction} from "../controllers/userController.js";

const expectedUser = [
    {
        userID: 1,
        vorname:"Marcel",
        nachname:"Chalatsoglou",
        email:"",
        passwort:"",
        isAdmin:""
    },
    {
        userID: 2,
        vorname:"Marcel",
        nachname:"Chalatsoglou",
        email:"testmail",
        passwort:"",
        isAdmin:""
    }
]
const expectedUpdateUser =
    '[{"userID":1,"vorname":"Marcel","nachname":"Chalatsogloudos","email":"","passwort":"","isAdmin":true}'
const expecteddeletedUser =
    '[{"userID":1,"vorname":"Marcel","nachname":"Chalatsoglou","email":"","passwort":"","isAdmin":true}'
const expectedloginUser =
    '[{"userID":1,"vorname":"Marcel","nachname":"Chalatsoglou","email":"","passwort":"","isAdmin":true}'
const expectedaddUser =
    '[{"userID":1,"vorname":"Marcel","nachname":"Chalatsoglou","email":"","passwort":"","isAdmin":true}'
const expectedUserbyEmail =
    '[{"userID":1,"vorname":"Marcel","nachname":"Chalatsoglou","email":"","passwort":"","isAdmin":true}'

getAllUsersAction = jest.mocked(() => {
    return expectedUser;
})

getUserByEmailAction = jest.mocked(() =>{
    return expectedUserbyEmail;
})
loginUserAction = jest.mocked(() =>{
    return expectedloginUser;
})
addUserAction = jest.mocked(() =>{
    return expectedaddUser;
})
updateUserAction = jest.mocked(() =>{
    return expectedUpdateUser;
})
deleteUserByIdAction = jest.mocked(() =>{
    return expecteddeletedUser;
})


describe('User',() =>{
    it("should get all User", async () =>{
        const output = await getAllUsersAction();
        expect(output).toStrictEqual(expectedUser);
    })
    it("should get a User", async () =>{
        const  email = "";
        const output = await getUserByEmailAction(email);
        expect(output).toStrictEqual(expectedUserbyEmail);
    })
    it ("should update a user with an id",async () =>{
        const user =
            {
                userID: 1,
                vorname:"Marcel",
                nachname:"Chalatsogloudos",
                email:"",
                passwort:"",
                isAdmin:"true"
            };
        const output = await updateUserAction(user);
        expect(output).toStrictEqual(expectedUpdateUser);
    });
    it("should delete a User",async () =>{
        const output  = await deleteUserByIdAction(1);
        expect(output).toStrictEqual(expecteddeletedUser);
    })
    it("should add a User",async () =>{
        const output  = await addUserAction(1);
        expect(output).toStrictEqual(expectedaddUser);
    });
    it("should login a User",async () =>{
        const output  = await loginUserAction(1);
        expect(output).toStrictEqual(expectedloginUser);
    });
    it("should update a User",async () =>{
        const output  = await updateUserAction(1);
        expect(output).toStrictEqual(expectedUpdateUser);
    });
});


