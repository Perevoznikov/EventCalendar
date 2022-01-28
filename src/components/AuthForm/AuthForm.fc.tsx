import React, {FC, useEffect} from 'react';
import cl from './AuthForm.fc.module.scss'
import InputUi from "../UI/Input/Input.ui";
import {MdEmail} from "react-icons/md";
import {FaLock} from "react-icons/fa";
import {SubmitHandler, useForm} from 'react-hook-form';
import {useAppSelector} from "../../hooks/reduxHooks";
import {AuthActionCreators} from "../../store/reducers/auth/actionCreators";
import {IUserAuth} from "../../models/IUser";
import {useDispatch} from "react-redux";
import ButtonUi from "../UI/Button/Button.ui";
import setModal from "../../utils/modals";

interface AuthFormFcProps {
}

interface IFormData {
    email: string,
    password: string
}

const AuthFormFc: FC<AuthFormFcProps> = () => {
    const {register, formState: {errors, isValid}, handleSubmit} = useForm<IFormData>({mode: "onChange"});
    const {isLoading, error} = useAppSelector(state => state.auth)
    const dispatch = useDispatch()


    const onSubmit: SubmitHandler<IFormData> = async (data: IUserAuth) => {
        dispatch(AuthActionCreators.login(data))
    };

    useEffect(() => {
        !!error && setModal({text: error})
        dispatch(AuthActionCreators.setError(''))
    }, [error])

    return (
            <form className={cl.form} onSubmit={handleSubmit(onSubmit)}>
                <h2 className={cl.title}>Member Login</h2>

                <InputUi Icon={MdEmail} type="text" placeholder='Email' disabled={isLoading}
                         {...register('email', {
                             value: 'admin@admin.ru',
                             required: 'Please enter email',
                             pattern: {
                                 value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                                 message: 'enter valid email'
                             }
                         })}
                         error={errors?.email?.message}
                />
                <InputUi Icon={FaLock} type="password" placeholder='Password' disabled={isLoading}
                         {...register('password', {
                             value: '121212',
                             required: 'Please enter password',
                             minLength: {
                                 value: 6,
                                 message: 'minimum 6 characters'
                             }
                         })}
                         error={errors?.password?.message}
                />

                <ButtonUi type='submit' disabled={!isValid || isLoading} loading={isLoading}>Login</ButtonUi>

                {/*<div className={classNames(cl.text, cl.text_forgot)}>Forgot <a className={cl.link} href="#">Username*/}
                {/*    / Password?</a></div>*/}
            </form>
    );
};

export default AuthFormFc;