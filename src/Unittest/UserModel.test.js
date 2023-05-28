import {it,expect,describe} from "@jest/globals"
import {getByEmail,saveWithoutPassword, User} from "../models/userModel.js";


const expectedUser =
    '[{"userID":1,"vorname":"Dimitrios","nachname":"Chalatsoglou","email":"chalatsoglou-dimitrios@web.de","passwort":"ilovejenniferaniston","isAdmin":true}' +
    ',{"userID":2,"vorname":"Leon","nachname":"Lovelock","email":"lovelock@forlive.de","passwort":"vibesitinman","isAdmin":false},' +
    '{"userID":3,"vorname":"Bong","nachname":"Tsetepe-Muani","email":"muani@yahoo.de","passwort":"gimmesome","isAdmin":false}' +
    ',{"userID":4,"vorname":"Adam","nachname":"Helpmme","email":"helpmme@please.uk","passwort":"hello","isAdmin":false},' +
    '{"userID":5,"vorname":"Aschkobar","nachname":"die Nummer Eins","email":"asche@gmail.com","passwort":"wasbleibtistasche","isAdmin":false}]'
const expectedIdUser =
    '{"userID":1,"vorname":"Dimitrios","nachname":"Chalatsoglou","email":"chalatsoglou-dimitrios@web.de","passwort":"ilovejenniferaniston","isAdmin":true}'
const expectedUpdateUser =
    '[{"userID":1,"vorname":"Marcel","nachname":"Chalatsoglou","email":"chalatsoglou-dimitrios@web.de","passwort":"ilovejenniferaniston","isAdmin":true}'
const expecteddeletedUser =
    '[{"userID":1,"vorname":"Marcel","nachname":"Chalatsoglou","email":"chalatsoglou-dimitrios@web.de","passwort":"ilovejenniferaniston","isAdmin":true}'
const expectedupdateUser_0 = [1]

User.getAll = jest.mocked(() => {
    return expectedUser;
})

User.getByID = jest.mocked(() =>{
    return expectedIdUser;
})
User.save = jest.mocked(() =>{
    return expectedUpdateUser;
})
User.removeByID = jest.mocked(() =>{
    return expecteddeletedUser;
})

// getByEmail = jest.mocked(() =>{
//     return expectedIdUser
// })


const user =
    {
        userID: 1,
        vorname:"Dimitrios",
        nachname:"Chalatsoglou",
        email:"chalatsoglou-dimitrios@web.de"
    };

saveWithoutPassword(user);

describe('User',() =>{
    it("should get all User", async () =>{
        const output = await User.getAll();
        expect(output).toStrictEqual(expectedUser);
    })

    it("shoud get User with the id = 1",async () => {
        const output = await User.getByID(1);
        expect(output).toStrictEqual(expectedIdUser);
    })
    it("should get a User", async () =>{
        const  email = "chalatsoglou-dimitrios@web.de"
        const output = await getByEmail(email);
        expect(JSON.stringify(output.dataValues)).toStrictEqual(expectedIdUser);
    })
    it ("should update a user with an id",async () =>{
        const user =
            {
                userID: 1,
                vorname:"Marcel",
                nachname:"Chalatsoglou_12",
                email:"chalatsoglou-dimitrios@web.de"
            };

        const output =  await saveWithoutPassword(user);
        expect(output).toStrictEqual(expectedupdateUser_0);
        const user_0 =
            {
                userID: 1,
                vorname:"Dimitrios",
                nachname:"Chalatsoglou",
                email:"chalatsoglou-dimitrios@web.de"
            };
        const output_  = await  saveWithoutPassword(user_0)


    })

    it("should delete a User",async () =>{
        const output  = await User.removeByID(1);
        expect(output).toStrictEqual(expecteddeletedUser);
    })

    it("should save a new User",async () =>{
         const user =
             {
                    vorname:"Marcel",
                    nachname:"Chalatsoglou",
                    email:"chalatsoglou-dimitrios@web.de",
                    passwort:"ilovejenniferaniston",
                    isAdmin: true
            };
        const output = await User.save(user);
        expect(output).toStrictEqual(expectedUpdateUser);

    })
});




