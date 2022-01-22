import {AuthActionEnum, RemoveAuthAction, SetAuthAction, SetErrorAction, SetIsLoadingAction,} from "./types";
import {IUser, IUserAuth, IUserReg} from "../../../models/IUser";
import {AppDispatch} from "../../index";
import UserService from "../../../api/UserService";

export const AuthActionCreators = {
    setAuth: (user: IUser): SetAuthAction => ({type: AuthActionEnum.SET_AUTH, payload: user}),
    removeAuth: (): RemoveAuthAction => ({type: AuthActionEnum.REMOVE_AUTH}),
    setIsLoading: (flag: boolean): SetIsLoadingAction => ({type: AuthActionEnum.SET_IS_LOADING, payload: flag}),
    setError: (message: string): SetErrorAction => ({type: AuthActionEnum.SET_ERROR, payload: message}),
    login: (user: IUserAuth) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true))
            const authUser = await UserService.authUser(user)
            if (authUser.email !== ''){
                dispatch(AuthActionCreators.setAuth(authUser))
                localStorage.setItem('user', JSON.stringify(authUser))
            }
        } catch (e) {
            dispatch(AuthActionCreators.setError('Auth error'))
        } finally {
            dispatch(AuthActionCreators.setIsLoading(false))
        }
    },
    logout: () => (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true))
            dispatch(AuthActionCreators.removeAuth())
            localStorage.removeItem('user')
        } catch (e) {
            dispatch(AuthActionCreators.setError('Auth error'))
        } finally {
            dispatch(AuthActionCreators.setIsLoading(false))
        }
    },
    registration: (user: IUserReg) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true))
            const newUser = await UserService.createUser(user)
            if (newUser.email !== ''){
                dispatch(AuthActionCreators.setAuth(newUser))
            }
        } catch (e) {
            dispatch(AuthActionCreators.setError('Registration error'))
        } finally {
            dispatch(AuthActionCreators.setIsLoading(false))
        }
    },
}