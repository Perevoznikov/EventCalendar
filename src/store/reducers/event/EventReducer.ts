import {EventAction, EventActionEnum, EventState} from "./types";
import {genId} from "../../../utils/utils";

const initialState: EventState = {
    events: [],
    error: '',
    isLoading: false
}

export default function EventReducer(state = initialState, action: EventAction) {
    switch (action.type) {
        case EventActionEnum.SET_EVENTS:
            return {...state, events: [...action.payload]}
        case EventActionEnum.ADD_EVENT:
            return {...state, events: [...state.events, action.payload]}
        case EventActionEnum.UPDATE_EVENT:
            const newEvents = state.events.map((event) => {
                if (event.id === action.payload.id){
                    return {...action.payload, id: event.id}
                }
                return event
            })
            return {...state, events: newEvents}
        case EventActionEnum.REMOVE_EVENT:
            return {...state, events: state.events.filter(event=>event.id!==action.payload.id)}
        case EventActionEnum.SET_IS_LOADING:
            return {...state, isLoading: action.payload}
        case EventActionEnum.SET_ERROR:
            return {...state, error: action.payload}

        default:
            return state
    }
}