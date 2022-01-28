import React, {memo} from 'react';
import cl from './Input.ui.module.scss'
import {IconContext, IconType} from 'react-icons';
import classNames from "classnames";
import ReactTooltip from 'react-tooltip';
import { MdError } from 'react-icons/md';


interface InputUiProps extends React.ComponentPropsWithoutRef<'input'> {
    Icon: IconType,
    name: string,
    error?: string | undefined
}

const InputUi = React.forwardRef<HTMLInputElement, InputUiProps>(({Icon, error, ...props}, ref) => {

    const err = (error) ? {is: true, message: error} : {is: false, message: ''}
    const inputClass = classNames([cl.input, {[cl.error]: err.is}])

    return (
        <IconContext.Provider value={{className: cl.icon}}>
            <ReactTooltip effect="solid" delayHide={500}/>
            <div className={cl.label}>
                <input className={inputClass} {...props} ref={ref}/>
                <span className={cl.icon__field}>
                    <Icon/>
                </span>
                <span className={cl.icon__error} data-tip={err.message} style={{display: (err.is)?'':'none'}}>
                    <MdError />
                </span>
            </div>
        </IconContext.Provider>
    );
})

export default memo(InputUi);