import React, {useState} from 'react';
import {AppContext} from "./AppContext";

export const AppState = (props) => {

    const initialFormState = {
        sexType: '',
        country: '',
        birthDay: ''
    }

    const initialLifeState = {
        months: 0,
        years: 0
    }

    const [formState, setFormState] = useState(initialFormState);

    const [lifeState, setLifeState] = useState(initialLifeState);

    const [dataDone, setDataDone] = useState(false)

    return (
        <AppContext.Provider value={{
            initialFormState,
            initialLifeState,
            formState,
            lifeState,
            dataDone,
            setFormState,
            setLifeState,
            setDataDone
        }
        }>
            {props.children}
        </AppContext.Provider>
    );
};