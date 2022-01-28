import React, {FC} from 'react';
import cl from './auth.page.module.scss'
import logo from './logo.png'
import {TiArrowLeftThick, TiArrowRightThick} from "react-icons/ti";
import {Link, matchPath, useLocation, Outlet} from "react-router-dom";
import Layout from "../layout/layout";

interface AuthPageProps {}

const AuthPage: FC<AuthPageProps> = () => {
    const {pathname} = useLocation();
    const isRegPath = matchPath("/registration", pathname);
    return (
        <Layout>
            <div className={cl.container}>
                <div className={cl.leftColumn}>
                    <img className={cl.img} src={logo} alt="IMG"/>
                </div>
                <div className={cl.rightColumn}>
                    <Outlet/>
                    {isRegPath
                        ? <Link to='/' className={cl.link}><TiArrowLeftThick/> Login</Link>
                        : <Link to='/registration' className={cl.link}>Create your Account <TiArrowRightThick/></Link>
                    }
                </div>
            </div>
        </Layout>

    );
};

export default AuthPage;