import {IUser} from "../../../models/IUser";

export interface AuthState {
    user: IUser
    isAuth: boolean,
    isLoading: boolean,
    error: string
}

export enum AuthActionEnum {
    SET_AUTH = 'SET_AUTH',
    REMOVE_AUTH = 'REMOVE_AUTH',
    SET_IS_LOADING = 'SET_IS_LOADING',
    SET_ERROR = 'SET_ERROR',
}

export interface SetAuthAction {
    type: AuthActionEnum.SET_AUTH,
    payload: IUser
}

export interface RemoveAuthAction {
    type: AuthActionEnum.REMOVE_AUTH
}

export interface SetIsLoadingAction {
    type: AuthActionEnum.SET_IS_LOADING,
    payload: boolean
}

export interface SetErrorAction {
    type: AuthActionEnum.SET_ERROR,
    payload: string
}

export type AuthAction = SetAuthAction | RemoveAuthAction | SetIsLoadingAction | SetErrorAction