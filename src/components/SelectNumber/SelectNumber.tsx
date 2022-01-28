import React, {FC, memo} from 'react';
import cl from './SelectNumber.module.scss'
import {BsCaretLeftFill, BsCaretRightFill} from "react-icons/bs";

interface SelectNumberProps {
    value: number,
    onChange?: (value: number) => void
}

const SelectNumber: FC<SelectNumberProps> = ({value, onChange}) => {
       const _onChange = (newState: number) => {
        onChange && onChange(newState)
    }

    return (
        <div className={cl.container}>
            <div className={cl.left} onClick={()=>_onChange(value-1)}><BsCaretLeftFill/></div>
            <span className={cl.text}>{value}</span>
            <div className={cl.right} onClick={()=>_onChange(value+1)}><BsCaretRightFill/></div>
        </div>
    );
};

export default memo(SelectNumber);