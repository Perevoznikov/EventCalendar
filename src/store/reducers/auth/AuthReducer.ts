import {AuthAction, AuthState, AuthActionEnum} from "./types";
import {IUser} from "../../../models/IUser";

const initialState: AuthState = {
    error: '',
    isAuth: false,
    isLoading: false,
    user: {} as IUser
}

export default function AuthReducer(state = initialState, action: AuthAction) {
    switch (action.type) {
        case AuthActionEnum.SET_AUTH:
            return {...state, isAuth: true, user: action.payload}
        case AuthActionEnum.REMOVE_AUTH:
            return {...state, isAuth: false, user: {} as IUser}
        case AuthActionEnum.SET_IS_LOADING:
            return {...state, isLoading: action.payload}
        case AuthActionEnum.SET_ERROR:
            return {...state, error: action.payload}
        default:
            return state
    }
}