export interface IUser {
    name: string,
    email: string
}

export interface IUserReg extends IUser{
    password: string
}

export interface IUserAuth {
    email: string
    password: string
}