import {IEvent} from "../models/IEvent";
import {getRandomInt} from "../utils/utils";
import {EVENTS} from "./config/events";

const delay = (time: number) => new Promise(res => setTimeout(res, time))

class Database {
    static events = EVENTS

    static async getEvents() {
        await delay(1000)
        return this.events
    }
}

export default class EventService {
    static async getEvents(): Promise<IEvent[] | Error> {
        return (getRandomInt(10) > 1)
            ? await Database.getEvents()
            : new Error('error events list request')
    }
}
