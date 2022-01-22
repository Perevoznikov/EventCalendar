import React, {FC} from 'react';
import cl from './ListEvents.module.scss'
import {IEvent} from "../../models/IEvent";
import CheckboxUi from "../UI/Checkbox/Checkbox.ui";
import {useAppDispatch} from "../../hooks/reduxHooks";
import {EventActionCreators} from "../../store/reducers/event/actionCreators";
import classNames from "classnames";
import {TiDelete} from "react-icons/ti";
import ItemEvent from "../ItemEvent/ItemEvent";

interface ListEventsProps {
    events: IEvent[]
}

const ListEvents: FC<ListEventsProps> = ({events}) => {
    return (
        <ul className={cl.list}>
            {events.map((event) => {
                return <ItemEvent event={event} key={event.id} />
            })}
        </ul>
    );
};

export default ListEvents;