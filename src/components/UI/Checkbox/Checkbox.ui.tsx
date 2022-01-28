import React, {ChangeEventHandler, FC, memo} from 'react';
import cl from './Checkbox.ui.module.scss'
import {genId} from "../../../utils/utils";

interface CheckboxUiProps {
    value: boolean
    id?: string,
    onChange?: (value: boolean)=>void
}

const CheckboxUi: FC<CheckboxUiProps> = ({id = genId(), value, onChange}) => {
    const _onChange:ChangeEventHandler = (e) => {
        onChange && onChange(!value)
    }
    return (
        <div className={cl.checkbox}>
            <input type="checkbox" id={`checkbox_${id}`} className={cl.input} checked={value} onChange={_onChange}/>
            <label htmlFor={`checkbox_${id}`} className={cl.label}>
                <svg className={cl.svg} viewBox="0 0 18 18">
                    <path
                        d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                    <polyline points="1 9 7 14 15 4"></polyline>
                </svg>
            </label>
        </div>
    );
};

export default memo(CheckboxUi);