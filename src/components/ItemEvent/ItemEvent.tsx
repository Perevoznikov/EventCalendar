import React, {FC, memo, useState} from 'react';
import cl from './ItemEvent.module.scss';
import CheckboxUi from "../UI/Checkbox/Checkbox.ui";
import {TiDelete} from "react-icons/ti";
import {useAppDispatch} from "../../hooks/reduxHooks";
import {IEvent} from "../../models/IEvent";
import {EventActionCreators} from "../../store/reducers/event/actionCreators";
import classNames from "classnames";
import {CSSTransition} from "react-transition-group";

interface ItemEventProps {
    event: IEvent
}

const ItemEvent: FC<ItemEventProps> = ({event}) => {
    const dispatch = useAppDispatch()
    const [active, setActive] = useState(true)

    const setStatus = (event: IEvent, value: boolean) => {
        dispatch(EventActionCreators.updateEvent({...event, status: value}))
    }
    const removeEvent = (event: IEvent) => {
        dispatch(EventActionCreators.removeEvent(event))
    }

    const classText = classNames(cl.text, {[cl.done]: event.status})

    return (
        <CSSTransition
            in={active}
            timeout={200}
            classNames={{
                exit: cl.exit
            }}
            onExited={()=>removeEvent(event)}
        >
            <li className={cl.li} key={event.id}>
                <CheckboxUi
                    value={event.status}
                    onChange={(value) => setStatus(event, value)}
                />
                <span className={classText}>
                {event.text}
            </span>
                <TiDelete
                    className={cl.delete}
                    onClick={() => setActive(false)}
                />
            </li>
        </CSSTransition>
    );
};

export default memo(ItemEvent);