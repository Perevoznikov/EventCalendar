import {genId} from "../../utils/utils";

export const EVENTS = [
    {
        id: genId(),
        text: 'insta post',
        status: false,
        date: new Date(2022, 1, 10)
    },
    {
        id: genId(),
        text: 'blog backup',
        status: true,
        date: new Date(2022, 1, 24)
    },
    {
        id: genId(),
        text: 'Start to the moon',
        status: true,
        date: new Date(2022, 0, 10)
    },
    {
        id: genId(),
        text: 'hotel booking',
        status: true,
        date: new Date(2022, 0, 13)
    },
    {
        id: genId(),
        text: 'call James',
        status: false,
        date: new Date(2022, 0, 16)
    },
    {
        id: genId(),
        text: 'go to shop',
        status: true,
        date: new Date(2022, 0, 25)
    },
    {
        id: genId(),
        text: 'facebook post',
        status: false,
        date: new Date(2022, 0, 25)
    },
    {
        id: genId(),
        text: 'finish project',
        status: false,
        date: new Date(2022, 0, 25)
    },
    {
        id: genId(),
        text: 'online lesson',
        status: false,
        date: new Date(2022, 0, 28)
    }
]