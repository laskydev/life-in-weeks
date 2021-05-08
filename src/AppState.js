import React from 'react';
import {AppContext} from "./AppContext";

export const AppState = (props) => {



    return (
        <AppContext.Provider>
            {props.children}
        </AppContext.Provider>
    );
};