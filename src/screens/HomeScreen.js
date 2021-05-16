import React from 'react';
import {AppForm} from "../components/AppForm";

export const HomeScreen = () => {
    return (
        <>
            <h1 className={'text-2xl text-center pt-5 font-bold text-white mt-10'}>Mi vida en cuadros</h1>
            <p className={'text-center mt-6 text-white'}>Mira cuantas semanas vividas has tenido y cuantas te quedan según el
                promedio de vida</p>
            <AppForm/>
        </>
    );
};