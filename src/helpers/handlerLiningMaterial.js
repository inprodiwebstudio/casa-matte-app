const handlerLiningMaterial = (colorMaterial) => {
	const stringList = colorMaterial.split(" ");
	const materialColor = stringList[stringList.length - 1];
	return materialColor;
};

export default handlerLiningMaterial;
