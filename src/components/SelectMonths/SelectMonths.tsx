import React, {FC, memo} from 'react';
import cl from './SelectMonths.module.scss'
import classNames from "classnames";

interface SelectMonthsProps {
    value: number,
    months?: [string, string, string, string, string, string, string, string, string, string, string, string],
    onChange?: (value: number) => void
}

const defaultMonths = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'july', 'aug', 'sep', 'oct', 'nov', 'dec']

const SelectMonths: FC<SelectMonthsProps> = ({value, months = defaultMonths, onChange}) => {
    const _onChange = (newState: number) => {
        onChange && onChange(newState)
    }

    return (
        <div className={cl.container}>
            {months.map((month, index) => {
                const className = classNames(cl.item, {[cl.active]: value === index})
                return <div className={className} key={index} onClick={()=>_onChange(index)}>{month}</div>
            })}
        </div>
    );
};

export default memo(SelectMonths);