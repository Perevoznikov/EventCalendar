import React, {FC, memo} from 'react';
import cl from './ViewDate.ui.module.scss'

interface ViewDateUiProps {
    date: Date,
    daysOfWeek?: [string, string, string, string, string, string, string]
}

const defaultDaysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

const ViewDateUi: FC<ViewDateUiProps> = ({date, daysOfWeek = defaultDaysOfWeek}) => {
    const day = date.getDate();
    const dayWeek = daysOfWeek[date.getDay()]
    return (
        <div className={cl.container}>
            <span className={cl.number}>{day}</span>
            <span className={cl.text}>{dayWeek}</span>
        </div>
    );
};

export default memo(ViewDateUi);