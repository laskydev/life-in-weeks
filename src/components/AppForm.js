import React from 'react';
import {Countries} from "../data/Countries";

export const AppForm = () => {

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <form
            className={'flex flex-col justify-center items-center mt-4'}
            onSubmit={handleSubmit}
        >
            <label className={'block text-center mb-2'}>Selecciona tu sexo de nacimiento</label>
            <select className={'block text-center mx-auto mb-2'}>
                <option value="Female">Mujer</option>
                <option value="Female">Hombre</option>
            </select>
            <label className={'block text-center '}>Selecciona tu país</label>
            <label className={'block text-center mb-2'}>*Sino aparece puedes seleccionar global</label>
            <select className={'block text-center mx-auto mb-2'}>
                {Countries.map(country => (
                    <option
                        key={country.id}
                        value={country}
                    >{country.country}</option>
                ))}
            </select>
            <label className={'block text-center mb-2'}>Ingresa tu edad en años</label>
            <input
                type="number"
                className={'text-center '}
                placeholder={'Ej. 21'}
            />
            <input
                type={'submit'}
                className={'bg-white py-2 px-8 mt-3'}
                value={'Calcular'}
            />

        </form>
    );
};