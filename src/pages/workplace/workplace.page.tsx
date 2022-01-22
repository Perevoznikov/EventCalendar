import React, {FC} from 'react';
import {useDispatch} from "react-redux";
import {AuthActionCreators} from "../../store/reducers/auth/actionCreators";
import {useAppSelector} from "../../hooks/reduxHooks";
import cl from "./workplace.page.module.scss";
import EventCalendar from "../../components/EventCalendar/EventCalendar";
import Layout from "../layout/layout";

interface WorkplacePageProps {

}

const WorkplacePage: FC<WorkplacePageProps> = () => {
    return (
        <Layout>
            <div className={cl.container}>
                <div className={cl.body}>
                    <EventCalendar/>
                </div>
            </div>
        </Layout>
    );
};

export default WorkplacePage;