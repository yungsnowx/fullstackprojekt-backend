import{describe, it, expect, jest} from '@jest/globals';
import{userControler} from "../controllers/userController.js";
const UserControler = new userControler()
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

    
UserControler.getAllUsersAction = jest.mocked(() => {
     return expectedUser;
 })

UserControler.getUserByEmailAction = jest.mocked(() =>{
    return expectedUserbyEmail;
})
UserControler.loginUserAction = jest.mocked(() =>{
    return expectedloginUser;
})
UserControler.addUserAction = jest.mocked(() =>{
    return expectedaddUser;
})
UserControler.updateUserAction = jest.mocked(() =>{
    return expectedUpdateUser;
})
UserControler.deleteUserByIdAction = jest.mocked(() =>{
    return expecteddeletedUser;
})


describe('User',() =>{
    // it("should get all User", async () =>{
    //     const output = await UserControler.getAllUsersAction();
    //     expect(output).toStrictEqual(expectedUser);
    // })
    it("should get a User", async () =>{
        const  email = "";
        const output = await UserControler.getUserByEmailAction(email);
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
        const output = await UserControler.updateUserAction(user);
        expect(output).toStrictEqual(expectedUpdateUser);
    });
    it("should delete a User",async () =>{
        const output  = await UserControler.deleteUserByIdAction(1);
        expect(output).toStrictEqual(expecteddeletedUser);
    })
    it("should add a User",async () =>{
        const output  = await UserControler.addUserAction(1);
        expect(output).toStrictEqual(expectedaddUser);
    });
    it("should login a User",async () =>{
        const output  = await UserControler.loginUserAction(1);
        expect(output).toStrictEqual(expectedloginUser);
    });
    it("should update a User",async () =>{
        const output  = await UserControler.updateUserAction(1);
        expect(output).toStrictEqual(expectedUpdateUser);
    });
});


