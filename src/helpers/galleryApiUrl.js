const isProduction = import.meta.env.PROD;

const galleryApiUrl = isProduction
	? import.meta.env.VITE_GALLERY_API
	: import.meta.env.VITE_GALLERY_API_LOCAL;

export default galleryApiUrl;
