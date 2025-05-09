import engravingColors from "core/constants/engravingColors";
const handlerGravingColorData = (colorGravingName) => {
	const allColors = Object.keys(engravingColors);
	const pielColors = ["Plata", "Dorado", "Cobre", "Oro rosa", "Transparente"];

	const currentColor = {
		name     : "",
		colorHex : "",
	};

	let listOfColors = [];

	if (colorGravingName.includes("Transaprente")) {
		currentColor.name = "Transparente";
		currentColor.colorHex = engravingColors["Transparente"].color;
	} else {
		for (const engravingColorData of allColors) {
			const containColor = colorGravingName.includes(engravingColorData);

			if (containColor) {
				currentColor.name = engravingColorData;
				currentColor.colorHex = engravingColors[engravingColorData]?.color;
				break;
			}
		}
	}

	if (colorGravingName.includes("PIEL")) {
		listOfColors = pielColors;
	} else {
		listOfColors = allColors;
	}

	return {
		currentColor,
		listOfColors,
	};
};

export default handlerGravingColorData;
