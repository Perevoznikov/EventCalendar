import React, {FC, useEffect} from 'react';
import cl from './RegistrationForm.fc.module.scss'
import InputUi from "../UI/Input/Input.ui";
import {MdEmail} from "react-icons/md";
import {FaLock, FaUserAlt} from "react-icons/fa";
import {SubmitHandler, useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {AuthActionCreators} from "../../store/reducers/auth/actionCreators";
import {IUserReg} from "../../models/IUser";
import ButtonUi from "../UI/Button/Button.ui";
import {useAppSelector} from "../../hooks/reduxHooks";
import setModal from "../../utils/modals";

interface RegistrationFormFcProps {}

interface IFormData {
    name: string,
    email: string,
    password: string,
    confirmPassword: string
}

const RegistrationFormFc: FC<RegistrationFormFcProps> = () => {
    const {register, getValues, formState: {errors, isValid}, handleSubmit} = useForm<IFormData>({mode: "onChange"});
    const {isLoading, error} = useAppSelector(state => state.auth)
    const dispatch = useDispatch()

    const onSubmit: SubmitHandler<IFormData> = (data: IUserReg) => {
        dispatch(AuthActionCreators.registration(data))
    }

    useEffect(() => {
        !!error && setModal({text: error})
        dispatch(AuthActionCreators.setError(''))
    }, [error])

    return (
        <form className={cl.form} onSubmit={handleSubmit(onSubmit)}>
            <h2 className={cl.title}>Create User</h2>
            <InputUi Icon={FaUserAlt} type='text' placeholder='Name' disabled={isLoading}
                     {...register('name', {
                         required: 'Please enter name'
                     })}
                error={errors?.name?.message}
            />
            <InputUi Icon={MdEmail} type='email' placeholder='Email' disabled={isLoading}
                     {...register('email', {
                         required: 'Please enter email',
                         pattern: {
                             value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                             message: 'enter valid email'
                         }
                     })}
                     error={errors?.email?.message}
            />
            <InputUi Icon={FaLock} type='password' placeholder='Password' disabled={isLoading}
                     {...register('password', {
                         required: 'Please enter password',
                         minLength: {
                             value: 6,
                             message: 'minimum 6 characters'
                         }
                     })}
                     error={errors?.password?.message}
            />
            <InputUi Icon={FaLock} type='password' placeholder='Retry Password' disabled={isLoading}
                     {...register('confirmPassword', {
                         required: 'Please enter password',
                         minLength: {
                             value: 6,
                             message: 'minimum 6 characters'
                         },
                         validate: value => getValues('password') === value || 'Password mismatch'
                     })}
                     error={errors?.confirmPassword?.message}
            />

            <ButtonUi type='submit' disabled={!isValid || isLoading} loading={isLoading}>Registration</ButtonUi>
        </form>
    );
};

export default RegistrationFormFc;