import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AppContext } from "../AppContext";
import { Countries } from "../data/Countries";

export const Months = () => {
	const history = useHistory();

	const appContext = useContext(AppContext);

	const {
		initialFormState,
		initialLifeState,
		formState: { country, sexType },
		lifeState: { months },
		dataDone,
		setFormState,
		setLifeState,
	} = appContext;

	if (dataDone === false) {
		history.push("/");
	}

	const monthsAreLiving = months;

	const [countrySelected] = Countries.filter(
		(element) => element.country === country
	);

	let averageMonths;

	if (sexType === "Male") {
		averageMonths = countrySelected.yearsAverageMale * 12;
	} else if (sexType === "Female") {
		averageMonths = countrySelected.yearsAverageFemale * 12;
	}

	const monthsForLiving = [];
	for (let i = 0; i < averageMonths; i++) {
		monthsForLiving.push(i);
	}
	console.log(monthsAreLiving);
	return (
		<>
			<h1 className=" text-center text-3xl text-white font-bold">
				Mi vida en cuadros
			</h1>
			<p className=" text-center text-white mt-4">
				Haz vivido:{" "}
				<span className="font-bold">{monthsAreLiving} meses</span>
			</p>
			<p className=" text-center text-white">
				El promedio de meses de vida para las personas como tu son:{" "}
				<span className="font-bold">{averageMonths} meses</span>
			</p>
			<p className="text-center text-white">
				Mira abajo gráficamente tu vida en cuadros{" "}
			</p>
			<div className="flex justify-center gap-3">
				<span className="bg-green-500 p-1">Meses vividos</span>{" "}
				<span className="p-1 bg-blue-300">Meses por vivir</span>
			</div>
			<p
				onClick={() => {
                    setFormState(initialFormState)
                    setLifeState(initialLifeState)
                    history.replace('/')
                }}
				className="text-center text-red-200 underline my-2 cursor-pointer"
			>
				Calcular de nuevo
			</p>
			<div
				className="bg-white px-4 md:px-6 lg:px-8 py-4 rounded-2xl mx-auto w-max"
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(12, auto)",
					gap: 5,
					alignItems: "center",
					alignContent: "center",
					justifyContent: "center",
					marginTop: "1rem",
				}}
			>
				{monthsForLiving.map((month) => (
					<div
						key={month}
						className={` border-current	 w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8  ${
							month <= monthsAreLiving
								? "bg-green-500"
								: "bg-blue-300"
						}`}
					></div>
				))}
			</div>
		</>
	);
};
