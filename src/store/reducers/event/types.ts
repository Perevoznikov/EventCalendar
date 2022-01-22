import {IEvent} from "../../../models/IEvent";

export interface EventState {
    events: IEvent[],
    isLoading: boolean,
    error: string
}

export enum EventActionEnum {
    SET_EVENTS = 'SET_EVENTS',
    ADD_EVENT = 'ADD_EVENT',
    UPDATE_EVENT = 'UPDATE_EVENT',
    REMOVE_EVENT = 'REMOVE_EVENT',
    SET_IS_LOADING = 'SET_IS_LOADING',
    SET_ERROR = 'SET_ERROR',
}

export interface SetEventsAction {
    type: EventActionEnum.SET_EVENTS,
    payload: IEvent[]
}

export interface AddEventAction {
    type: EventActionEnum.ADD_EVENT,
    payload: IEvent
}

export interface UpdateEventAction {
    type: EventActionEnum.UPDATE_EVENT,
    payload: IEvent
}

export interface RemoveEventAction {
    type: EventActionEnum.REMOVE_EVENT,
    payload: IEvent
}

export interface SetIsLoadingAction {
    type: EventActionEnum.SET_IS_LOADING,
    payload: boolean
}

export interface SetErrorAction {
    type: EventActionEnum.SET_ERROR,
    payload: string
}

export type EventAction =
    AddEventAction
    | SetEventsAction
    | UpdateEventAction
    | RemoveEventAction
    | SetIsLoadingAction
    | SetErrorAction