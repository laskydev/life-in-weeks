import React, { useContext, useState } from "react";
import { Countries } from "../data/Countries";
import { AppContext } from "../AppContext";
import { useHistory } from "react-router-dom";

export const AppForm = () => {
	const appContext = useContext(AppContext);

	const {
		formState,
		setFormState,
		setLifeState,
		lifeState,
		formState: { birthDay },
		setDataDone,
	} = appContext;
	const [error, setError] = useState(false);

	const history = useHistory();

	const handleChange = (e) => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});

		
	};

	const setOnLifeState = () => {
		const actualDate = new Date();
		const birth = new Date(birthDay);
		const yearsLiving = actualDate.getFullYear() - birth.getFullYear();
		const monthsLiving = yearsLiving * 12;
		return setLifeState({
			...lifeState,
			years: yearsLiving,
			months: monthsLiving,
		});
	};

	const HandleSubmit = async (e) => {
		e.preventDefault();

		//Validation
		if (
			(formState.sexType === '---Selecciona---') ||
			(formState.country === "") | "---Selecciona---"
		)
			return setError(true);

		if (formState.birthDay >= new Date("2020-01-01")) return setError(true);

		//Set in context converted data
		setError(false);
		setOnLifeState();
		setDataDone(true)
		history.push("/months");
	};

	return (
		<form
			className={"flex flex-col justify-center items-center mt-4"}
			onSubmit={HandleSubmit}
		>
			<label className={"block text-center mb-2 text-white"}>
				Selecciona tu sexo{" "}
			</label>
			<select
				className={"block text-center mx-auto mb-2"}
				onChange={handleChange}
				name={"sexType"}
			>
				<option>---Selecciona---</option>
				<option value="Female">Mujer</option>
				<option value="Male">Hombre</option>
			</select>
			<label className={"block text-center text-white"}>
				Selecciona tu país
			</label>
			<label className={"block text-center mb-2 text-gray-900"}>
				*Sino aparece puedes seleccionar global
			</label>
			<select
				name={"country"}
				onChange={handleChange}
				className={"block text-center mx-auto mb-2"}
			>
				<option>---Selecciona---</option>
				{Countries.map((country) => (
					<option key={country.id} value={country.country}>
						{country.country}
					</option>
				))}
			</select>
			<label className={"block text-center mb-2 text-white"}>
				Ingresa tu fecha de nacimiento
			</label>
			<input
				type="date"
				className={"text-center "}
				placeholder={"Ej. 21"}
				name={"birthDay"}
				onChange={handleChange}
			/>
			<input
				type={"submit"}
				className={"bg-white py-2 px-8 mt-3"}
				value={"Calcular"}
			/>
			{error && (
				<div className="bg-red-500 mt-9">
					<p className="text-white p-9 font-bold text-center">
						Por favor selecciona un Sexo, País o fecha valida
					</p>
				</div>
			)}
		</form>
	);
};
