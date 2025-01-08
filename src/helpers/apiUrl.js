const isProduction = import.meta.env.PROD;

const apiUrl = isProduction
	? "https://casa-matte-api-cs6c4.ondigitalocean.app/api/v1/"
	: import.meta.env.VITE_API_LOCAL;

export default apiUrl;
