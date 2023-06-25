import {it,expect,describe, jest} from "@jest/globals"
import {User} from "../models/userModel.js";


const expectedUser =
    '[{"userID":1,"vorname":"Dimitrios","nachname":"Chalatsoglou","isAdmin":true}' +
    ',{"userID":2,"vorname":"Leon","nachname":"Lovelock","isAdmin":false},' +
    '{"userID":3,"vorname":"Bong","nachname":"Tsetepe-Muani","isAdmin":false}' +
    ',{"userID":4,"vorname":"Adam","nachname":"Helpmme","isAdmin":false},' +
    '{"userID":5,"vorname":"Aschkobar","nachname":"die Nummer Eins","isAdmin":false}]'
const expectedIdUser =
    '{"userID":1,"vorname":"Dimitrios","nachname":"Chalatsoglou","isAdmin":true}'
const expectedUpdateUser =
    '[{"userID":1,"vorname":"Marcel","nachname":"Chalatsoglou","isAdmin":true}'
const expecteddeletedUser =
    '[{"userID":1,"vorname":"Marcel","nachname":"Chalatsoglou","isAdmin":true}'

    
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

describe('User',() =>{
    it("should get all User", async () =>{
        const output = await User.getAll();
        expect(output).toStrictEqual(expectedUser);
    })

    it("shoud get User with the id = 1",async () => {
        const output = await User.getByID(1);
        expect(output).toStrictEqual(expectedIdUser);
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
                    isAdmin: true
            };
        const output = await User.save(user);
        expect(output).toStrictEqual(expectedUpdateUser);
    })
});




