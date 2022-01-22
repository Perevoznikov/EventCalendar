import React, {FC, useEffect} from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import AuthPage from "../pages/auth/auth.page";
import AuthFormFc from "./AuthForm/AuthForm.fc";
import RegistrationFormFc from "./RegistrationForm/RegistrationForm.fc";
import {useAppSelector} from "../hooks/reduxHooks";
import WorkplacePage from "../pages/workplace/workplace.page";
import {useDispatch} from "react-redux";
import {AuthActionCreators} from "../store/reducers/auth/actionCreators";

interface AppRouterProps {}

const AppRouter: FC<AppRouterProps> = () => {
    const {isAuth} = useAppSelector(state => state.auth)

    const dispatch = useDispatch()
    useEffect(() => {
        const jsonUser = localStorage.getItem('user')
        if (jsonUser) dispatch(AuthActionCreators.setAuth(JSON.parse(jsonUser)))
    }, [])

    const publicRoutes = <Routes>
        <Route path='/' element={<AuthPage />}>
            <Route index element={<AuthFormFc/>}/>
            <Route path='registration' element={<RegistrationFormFc/>}/>
        </Route>
        <Route path='*' element={<Navigate to='/auth'/>}/>
    </Routes>

    const privateRoutes = <Routes>
        <Route path='/' element={<WorkplacePage />}/>
        <Route path='*' element={<Navigate to='/' />}/>
    </Routes>

    return isAuth?privateRoutes:publicRoutes;
};

export default AppRouter;