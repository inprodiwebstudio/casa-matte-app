// pdfWorker.js - Alternativa sin async/await
// eslint-disable-next-line no-undef
importScripts("https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js");

self.onmessage = function(e) {
	const { images, pageSize } = e.data;

	try {
		if (!images || !pageSize) {
			throw new Error("Datos incompletos para generar PDF");
		}

		const { jsPDF } = self.jspdf;
		const pdf = new jsPDF({
			orientation : pageSize[0] > pageSize[1] ? "landscape" : "portrait",
			unit        : "pt",
			format      : [pageSize[0], pageSize[1]],
		});

		let processed = 0;

		const processNextImage = () => {
			if (processed > 0) {
				pdf.addPage([pageSize[0], pageSize[1]]);
			}

			const base64Img = images[processed];
			pdf.addImage(base64Img, "PNG", 0, 0, pageSize[0], pageSize[1]);

			processed++;

			if (processed < images.length) {
				// Pequeña pausa para evitar bloqueo
				if (processed % 5 === 0) {
					setTimeout(processNextImage, 0);
				} else {
					processNextImage();
				}
			} else {
				// Todas las imágenes procesadas
				const pdfBlob = pdf.output("blob");
				self.postMessage({
					success : true,
					blob    : pdfBlob,
				});
			}
		};

		// Iniciar procesamiento
		processNextImage();

	} catch (error) {
		console.error("Error en worker generando PDF:", error);
		self.postMessage({
			success : false,
			error   : error.message,
		});
	}
};

self.onerror = function(error) {
	console.error("Error global en worker:", error);
	self.postMessage({
		success : false,
		error   : "Error global en el worker",
	});
};
