import React, {FC, memo} from 'react';
import cl from './CalendarFull.module.scss';
import './Calendar.scss'
import Calendar, {CalendarTileProperties} from "react-calendar";
import SelectNumber from "../SelectNumber/SelectNumber";
import SelectMonths from "../SelectMonths/SelectMonths";
import {IEvent} from "../../models/IEvent";
import {isLessDay} from "../../utils/utils";
import classNames from "classnames";

interface CalendarFullProps {
    date: Date,
    getEvents: (date: Date) => IEvent[]
    onChange: (date: Date) => void
}

const CalendarFull: FC<CalendarFullProps> = ({date, onChange, getEvents}) => {

    const onChangeYear = (value: number) => {
        onChange(new Date(date.setFullYear(value)))
    }
    const onChangeMonth = (value: number) => {
        onChange(new Date(date.setMonth(value)))
    }
    const onChangeDay = (date: Date) => {
        onChange(date)
    }
    const setToday = () => {
        onChange(new Date())
    }

    const setEventsDay = ({date}: CalendarTileProperties) => {
        const classes = []
        const eventsInDay = getEvents(date)
        const isEventsInDay = eventsInDay.length > 0
        if (isEventsInDay) {
            const isDoneDay = eventsInDay.every(event => event.status)
            isDoneDay ? classes.push(cl.dayDone) : classes.push(cl.dayWork)
        }
        if(isLessDay(date, new Date())){
            classes.push(cl.lessDay)
        }
        return classNames(classes)
    }

    return (
        <div className={cl.container}>
            <div className={cl.header}>
                <div className={cl.today} onClick={setToday}>today</div>
                <SelectNumber value={date.getFullYear()} onChange={onChangeYear}/>
            </div>
            <div className={cl.months}>
                <SelectMonths value={date.getMonth()} onChange={onChangeMonth}/>
            </div>
            <div className={cl.calendarUI}>
                <Calendar
                    value={date}
                    activeStartDate={date}
                    onChange={onChangeDay}
                    showNavigation={false}
                    locale='en-US'
                    tileClassName={setEventsDay}
                />
            </div>
        </div>
    );
};

export default memo(CalendarFull);