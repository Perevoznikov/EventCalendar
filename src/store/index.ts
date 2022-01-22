import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk'
import AuthReducer from "./reducers/auth/AuthReducer";
import EventReducer from "./reducers/event/EventReducer";

const rootReducer = combineReducers({
    auth: AuthReducer,
    event: EventReducer
})
export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch