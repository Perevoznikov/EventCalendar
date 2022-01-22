import {
    EventActionEnum,
    AddEventAction,
    UpdateEventAction,
    SetIsLoadingAction,
    SetErrorAction,
    SetEventsAction, RemoveEventAction
} from "./types";
import {IEvent} from "../../../models/IEvent";
import {AppDispatch} from "../../index";
import EventService from "../../../api/EventService";

export const EventActionCreators = {
    setEvents: (events: IEvent[]): SetEventsAction => ({type: EventActionEnum.SET_EVENTS, payload: events}),
    addEvent: (event: IEvent): AddEventAction => ({type: EventActionEnum.ADD_EVENT, payload: event}),
    updateEvent: (event: IEvent): UpdateEventAction => ({type: EventActionEnum.UPDATE_EVENT, payload: event}),
    removeEvent: (event: IEvent): RemoveEventAction => ({type: EventActionEnum.REMOVE_EVENT, payload: event}),
    setIsLoading: (flag: boolean): SetIsLoadingAction => ({type: EventActionEnum.SET_IS_LOADING, payload: flag}),
    setError: (error: string): SetErrorAction => ({type: EventActionEnum.SET_ERROR, payload: error}),
    fetchEvents: () => async (dispatch: AppDispatch) => {
        try {
            dispatch(EventActionCreators.setIsLoading(true))
            const events = await EventService.getEvents()
            dispatch(EventActionCreators.setEvents(events))
        } catch (e) {
            console.log(e)
        } finally {
            dispatch(EventActionCreators.setIsLoading(false))
        }
    }
}