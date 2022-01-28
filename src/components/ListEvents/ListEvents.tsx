import React, {FC, memo} from 'react';
import cl from './ListEvents.module.scss'
import {IEvent} from "../../models/IEvent";
import ItemEvent from "../ItemEvent/ItemEvent";

interface ListEventsProps {
    events: IEvent[]
}

const ListEvents: FC<ListEventsProps> = ({events}) => {
    return (
        <ul className={cl.list}>
            {events.map((event) => {
                return <ItemEvent event={event} key={event.id}/>
            })}
        </ul>
    );
};

export default memo(ListEvents);