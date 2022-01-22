import {IEvent} from "../models/IEvent";

export const genId = (): string => {
    const id = Date.now() * Math.random()
    return id.toString()
}

export const getStringDate = (date: Date): string => {
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
}

export const isEqualDay = (date1: Date, date2: Date): boolean => {
    return date1.getDate() === date2.getDate() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getFullYear() === date2.getFullYear()
}

export const isLessDay = (date: Date, fromDate: Date) => {
    if (date.getFullYear() < fromDate.getFullYear()){
        return true
    }
    if (date.getFullYear() > fromDate.getFullYear()){
        return false
    }
    if (date.getMonth() < fromDate.getMonth()){
        return true
    }
    if (date.getMonth() > fromDate.getMonth()){
        return false
    }
    if (date.getDate() < fromDate.getDate()){
        return true
    }
    if (date.getDate() >= fromDate.getDate()){
        return false
    }
}

//Преобразует массив IEvent[] к объекту вида {'1.10.2022': [...массив событий в эту дату]}
export const prepareEvents = (events: IEvent[]) => {
    const _events = {} as any
    events.forEach((event) => {
        const key = getStringDate(event.date)
        if (key in _events) {
            _events[key].push(event)
        } else {
            _events[key] = [event]
        }
    })
    return {
        //возвращает функцию, которая возвращает массив IEvent[] в определенную дату
        getEventsInDate: (date: Date): IEvent[] => {
            const _date = getStringDate(date)
            return _events[_date] || []
        }
    }
}