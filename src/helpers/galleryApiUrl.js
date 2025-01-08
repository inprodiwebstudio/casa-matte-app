const isProduction = import.meta.env.PROD;

const galleryApiUrl = isProduction
	? "https://casa-matte-api-cs6c4.ondigitalocean.app/api/v1/"
	: import.meta.env.VITE_GALLERY_API_LOCAL;

export default galleryApiUrl;
