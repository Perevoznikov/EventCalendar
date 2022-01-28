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
import LoaderUi from "../UI/Loader/Loader.ui";
import setModal from "../../utils/modals";

interface EventCalendarProps {

}

const EventCalendar: FC<EventCalendarProps> = () => {
    const [date, setDate] = useState(new Date())
    const {events, error, isLoading} = useAppSelector(state => state.event)
    const dispatch = useDispatch()

    const {getEventsInDate} = useMemo(() => {
        return prepareEvents(events)
    }, [events])

    const _onChangeDate = (date: Date) => {
        setDate(date)
    }

    useEffect(() => {
        dispatch(EventActionCreators.fetchEvents())
    }, [])

    useEffect(() => {
        !!error && setModal({text: error})
        dispatch(EventActionCreators.setError(''))
    }, [error])

    return (
        <div className={cl.container}>
            {isLoading && <LoaderUi/>}
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