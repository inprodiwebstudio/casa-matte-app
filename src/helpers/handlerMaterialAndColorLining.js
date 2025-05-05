import frontThemesTextures from "core/constants/frontThemesColors";

const handlerMaterialAndColorLining = (colorMaterial) => {
	const materialsGroup = Object.keys(frontThemesTextures);

	let materialName = "";
	let colorName = "";

	for (const materialGroup of materialsGroup) {
		const containMaterial = colorMaterial.includes(materialGroup);

		if (containMaterial) {
			materialName = materialGroup;
			break;
		}
	}

	if (!materialName) {
		return new Error("Material not found");
	}

	const materialColors = Object.keys(frontThemesTextures[materialName]);

	for (const color of materialColors) {
		const containColor = colorMaterial.includes(color);

		if (containColor) {
			colorName = color;
			break;
		}
	}

	return { materialName, colorName };
};

export default handlerMaterialAndColorLining;
