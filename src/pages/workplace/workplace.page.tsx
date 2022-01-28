import React, {FC, Suspense} from 'react';
import cl from "./workplace.page.module.scss";
import Layout from "../layout/layout";
import LoaderUi from "../../components/UI/Loader/Loader.ui";
const EventCalendar = React.lazy(() => import("../../components/EventCalendar/EventCalendar"));

interface WorkplacePageProps {

}

const WorkplacePage: FC<WorkplacePageProps> = () => {
    return (
        <Layout>
            <div className={cl.container}>
                <div className={cl.body}>
                    <Suspense fallback={<LoaderUi/>}>
                        <EventCalendar/>
                    </Suspense>
                </div>
            </div>
        </Layout>
    );
};

export default WorkplacePage;