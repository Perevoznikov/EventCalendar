import {IEvent} from "../models/IEvent";
import {genId} from "../utils/utils";

const delay = (time: number) => new Promise(res => setTimeout(res, time))

class Database {
    static events = [
        {
            id: genId(),
            text: 'My first task',
            status: false,
            date: new Date(2022, 0, 2)
        },
        {
            id: genId(),
            text: 'My second task',
            status: true,
            date: new Date(2022, 0, 2)
        },
        {
            id: genId(),
            text: 'Start to the moon',
            status: true,
            date: new Date(2022, 0, 10)
        },
        {
            id: genId(),
            text: 'Happy new year',
            status: false,
            date: new Date(2021, 11, 31)
        }
    ]
    static async getEvents() {
        await delay(1000)
        return this.events
    }
}

export default class EventService {
    static async getEvents() {
        return await Database.getEvents()
    }
}