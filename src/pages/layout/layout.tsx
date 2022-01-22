import React, {FC} from 'react';
import cl from './layout.module.scss'
import {useAppSelector} from "../../hooks/reduxHooks";
import {useDispatch} from "react-redux";
import {AuthActionCreators} from "../../store/reducers/auth/actionCreators";

interface LayoutProps {

}

const Layout: FC<LayoutProps> = ({children}) => {
    const {isAuth, user} = useAppSelector(state => state.auth)
    const dispatch = useDispatch()

    const logout = () => {
        dispatch(AuthActionCreators.logout())
    }

    return (
        <div className={cl.container}>
                {isAuth && <div className={cl.header}>
                  <div className={cl.logout} onClick={logout}>logout {user.name}</div>
                </div>}
                <div className={cl.body}>
                    <div className={cl.window}>
                        {children}
                    </div>
                </div>
        </div>
    );
};

export default Layout;