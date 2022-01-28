import React, {FC, memo} from 'react';
import cl from './Button.ui.module.scss'
import classNames from "classnames";

interface ButtonUiProps extends React.ComponentPropsWithoutRef<'button'> {
    loading?: boolean
}

const ButtonUi: FC<ButtonUiProps> = ({children, loading, ...props}) => {
    const buttonClass = classNames([cl.button, {[cl.loading]: loading}])
    return (
        <button className={buttonClass} {...props}>
            {children}
        </button>
    );
};

export default memo(ButtonUi);