// pdfWorker.js - Web Worker para generar PDF con jsPDF
// eslint-disable-next-line no-undef
importScripts("https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js");

self.onmessage = function(e) {
	const { images, pageSize } = e.data;

	try {
		// Crear instancia de jsPDF
		const { jsPDF } = self.jspdf || self;
		const pdf = new jsPDF({
			orientation : pageSize[0] > pageSize[1] ? "landscape" : "portrait",
			unit        : "pt",
			format      : [pageSize[0], pageSize[1]],
		});

		// Agregar cada imagen como página
		images.forEach((base64Img, index) => {
			if (base64Img) {
				if (index > 0) {
					pdf.addPage([pageSize[0], pageSize[1]]);
				}

				// Agregar imagen a la página
				pdf.addImage(base64Img, "PNG", 0, 0, pageSize[0], pageSize[1]);
			}
		});

		// Generar blob del PDF
		const pdfBlob = pdf.output("blob");

		// Enviar resultado de vuelta
		self.postMessage({ success : true, blob : pdfBlob });

	} catch (error) {
		console.error("Error en worker generando PDF:", error);
		self.postMessage({ success : false, error : error.message });
	}
};
