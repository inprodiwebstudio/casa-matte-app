// textToImage.js
import domtoimage from "dom-to-image";

const textToImage = async (id) => {
	const element = document.getElementById(id);

	if (!element) return undefined;

	// --- NUEVO: Guardar URLs originales y reemplazar temporalmente ---
	const images = element.getElementsByTagName("img");
	console.log(element, images);
	const originalUrls = [];

	// Mapa de reemplazo para caracteres problemáticos
	Array.from(images).forEach((img, index) => {
		const originalSrc = img.src;
		originalUrls[index] = originalSrc;

		// Reemplazar paréntesis y otros caracteres problemáticos temporalmente
		// Usamos un placeholder único que no cause problemas
		const tempSrc = originalSrc
			.replace(/\(/g, "__LEFT_PAREN__")
			.replace(/\)/g, "__RIGHT_PAREN__")
			.replace(/%28/g, "__LEFT_PAREN__")
			.replace(/%29/g, "__RIGHT_PAREN__");

		console.log(`🔄 Reemplazando URL temporalmente: ${originalSrc.substring(0, 50)}... -> ${tempSrc.substring(0, 50)}...`);
		img.src = tempSrc;
	});
	// --- FIN NUEVO ---

	await document.fonts.ready;

	const width = element.clientWidth * 2;
	const height = element.clientHeight * 2;

	let imgData;
	try {
		imgData = await domtoimage.toPng(element, {
			width  : width,
			height : height,
			style  : {
				transform       : `scale(${2})`,
				transformOrigin : "top left",
				background      : "white",
				width           : `${element.clientWidth}px`,
				height          : `${element.clientHeight}px`,
			},
		});
	} catch (error) {
		console.error("Error en domtoimage:", error);
		throw error;
	} finally {
		// --- NUEVO: Restaurar URLs originales SIEMPRE ---
		Array.from(images).forEach((img, index) => {
			if (originalUrls[index]) {
				console.log(`🔄 Restaurando URL original: ${img.src.substring(0, 50)}... -> ${originalUrls[index].substring(0, 50)}...`);
				img.src = originalUrls[index];
			}
		});
		// --- FIN NUEVO ---
	}

	return imgData;
};

export default textToImage;
