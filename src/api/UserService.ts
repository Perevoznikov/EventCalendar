import {IUser, IUserAuth, IUserReg} from "../models/IUser";
import {getRandomInt} from "../utils/utils";
import {USERS} from "./config/users";

const delay = (time: number) => new Promise(res => setTimeout(res, time))

class Database {
    static users = USERS

    static async createUser(user: any) {
        await delay(1000)
        this.users.push(user)
        return {name: user.name, email: user.email}
    }
    static async authUser(user: any) {
        await delay(1000)
        let result = {name: '', email: ''}
        this.users.forEach((item) => {
            if (item.email === user.email && item.password === user.password) {
                result = {name: item.name, email: item.email}
            }
        })
        return result
    }
}

export default class UserService {
    static async createUser(user: IUserReg): Promise<IUser | Error> {
        return (getRandomInt(10) > 1)
            ? await Database.createUser(user)
            : new Error('error create user request')
    }
    static async authUser(user: IUserAuth): Promise<IUser | Error> {
        return (getRandomInt(10) > 1)
            ? await Database.authUser(user)
            : new Error('error auth request')
    }
}
