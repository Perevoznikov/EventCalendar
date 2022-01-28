import React, {FC, memo} from 'react';
import cl from './CreateEventForm.module.scss'
import {BsFillPlusCircleFill} from "react-icons/bs";
import InputUi from "../UI/Input/Input.ui";
import {SubmitHandler, useForm} from "react-hook-form";
import {IEvent} from "../../models/IEvent";
import {genId, isLessDay} from "../../utils/utils";
import {useAppDispatch} from "../../hooks/reduxHooks";
import {EventActionCreators} from "../../store/reducers/event/actionCreators";

interface CreateEventFormProps {
    date: Date
}

interface IFormData {
    textEvent: string
}

const CreateEventForm: FC<CreateEventFormProps> = ({date}) => {
    const {register, handleSubmit, reset, formState: {errors}} = useForm<IFormData>({mode: 'onSubmit'})
    const dispatch = useAppDispatch()

    const _onSubmit:SubmitHandler<IFormData> = ({textEvent}) => {
        const newEvent = {
            id: genId(),
            status: false,
            date: date,
            text: textEvent
        } as IEvent
        dispatch(EventActionCreators.addEvent(newEvent))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(_onSubmit)}>
            <InputUi Icon={BsFillPlusCircleFill}
                     placeholder='add event...'
                     disabled={isLessDay(date, new Date())}
                     {...register('textEvent', {required: 'Please enter text'})}
                     error={errors?.textEvent?.message}
            />
        </form>
    );
};

export default memo(CreateEventForm);