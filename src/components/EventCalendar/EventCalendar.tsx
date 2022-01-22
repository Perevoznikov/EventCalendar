import React, {FC, useEffect, useMemo, useState} from 'react';
import cl from './EventCalendar.module.scss'
import ViewDateUi from "../UI/ViewDate/ViewDate.ui";
import ListEvents from "../ListEvents/ListEvents";
import CreateEventForm from "../CreateEventForm/CreateEventForm";
import {useAppSelector} from "../../hooks/reduxHooks";
import CalendarFull from "../CalendarFull/CalendarFull";
import {prepareEvents} from "../../utils/utils";
import {EventActionCreators} from "../../store/reducers/event/actionCreators";
import {useDispatch} from "react-redux";

interface EventCalendarProps {

}

const EventCalendar: FC<EventCalendarProps> = () => {
    const [date, setDate] = useState(new Date())

    const {events} = useAppSelector(state => state.event)
    const {getEventsInDate} = useMemo(() => {
        return prepareEvents(events)
    }, [events])

    const _onChangeDate = (date: Date) => {
        setDate(date)
    }

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(EventActionCreators.fetchEvents())
    }, [])

    return (
        <div className={cl.container}>
            <div className={cl.aside}>
                <div className={cl.currentDate}>
                    <ViewDateUi date={date}/>
                </div>
                <div className={cl.listEvents}>
                    <ListEvents events={getEventsInDate(date)}/>
                </div>
                <div className={cl.addEvent}>
                    <CreateEventForm date={date}/>
                </div>
            </div>
            <div className={cl.calendar}>
                <CalendarFull date={date} onChange={_onChangeDate} getEvents={getEventsInDate}/>
            </div>
        </div>
    );
};

export default EventCalendar;