import React, {FC} from 'react';
import cl from './Loader.ui.module.scss';
import {ImSpinner2} from "react-icons/im";

interface LoaderUiProps {

}

const LoaderUi: FC<LoaderUiProps> = () => {
    return (
        <div className={cl.container}>
                <ImSpinner2 className={cl.icon}/>
        </div>
    );
};

export default LoaderUi;