const constructorImg = (urlimg) => {
	if (typeof urlimg !== "string" || !urlimg.includes("/upload/")) return urlimg;

	// Separamos la base y el resto de la URL
	const [base, rest] = urlimg.split("/upload/");
	if (!rest) return urlimg;

	// Quitamos parámetros (por ejemplo: ?_a=BAMCkGZW0)
	const [pathWithoutParams, query] = rest.split("?");
	const segments = pathWithoutParams.split("/");

	// Filtramos transformaciones previas (ej: w_1920, q_30, etc.)
	const cleanSegments = segments.filter(seg => !/^w_|^q_|^c_|^f_/.test(seg));

	// Reconstruimos la ruta final
	const finalPath = cleanSegments.join("/");

	// Agregamos transformaciones nuevas
	const optimizedUrl = `${base}/upload/c_fill,w_3200,q_auto,f_auto/v12345/${finalPath}`;

	// Agregamos los parámetros de vuelta si existen
	return query ? `${optimizedUrl}?${query}` : optimizedUrl;
};

export default constructorImg;
