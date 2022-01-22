import {IUserAuth, IUserReg} from "../models/IUser";

const delay = (time: number) => new Promise(res => setTimeout(res, time))

class Database {
    static users = [
        {
            name: 'admin',
            email: 'admin@admin.ru',
            password: '121212'
        }
    ]
    static async getUsers() {
        await delay(1000)
        return this.users
    }
    static async createUser(user: any) {
        await delay(1000)
        this.users.push(user)
        return {name: user.name, email: user.email}
    }
    static async authUser(user: any) {
        await delay(1000)
        let result = {name: '', email: ''}
        this.users.map((item) => {
            if (item.email === user.email && item.password === user.password) {
                result = {name: item.name, email: item.email}
            }
        })
        return result
    }
}

export default class UserService {
    static async getUsers() {
        return await Database.getUsers()
    }
    static async createUser(user: IUserReg) {
        return await Database.createUser(user)
    }
    static async authUser(user: IUserAuth) {
        return await Database.authUser(user)
    }
}