// eslint-disable-next-line import/no-extraneous-dependencies
import * as pdfjsLib from "pdfjs-dist";
// eslint-disable-next-line import/extensions, import/no-extraneous-dependencies
import "pdfjs-dist/build/pdf.worker.mjs";
export async function convertPDFToImages(pdfBlob) {
	const arrayBuffer = await pdfBlob.arrayBuffer();
	const pdf = await pdfjsLib.getDocument({ data : arrayBuffer }).promise;


	const images = [];

	for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
		const page = await pdf.getPage(pageNum);
		const viewport = page.getViewport({ scale : 2 }); // aumenta calidad

		const canvas = document.createElement("canvas");
		const context = canvas.getContext("2d");
		canvas.width = viewport.width;
		canvas.height = viewport.height;

		await page.render({ canvasContext : context, viewport }).promise;

		const imageData = canvas.toDataURL("image/jpeg", 0.95); // 0.95 = calidad
		images.push(imageData);
	}

	return images; // arreglo de dataURLs (JPG)
}
