// eslint-disable-next-line import/no-extraneous-dependencies
import domtoimage from "dom-to-image";
// eslint-disable-next-line import/no-extraneous-dependencies
import piexif from "piexifjs";


function updateJfifDPI(binaryString, dpi) {
	const data = new Uint8Array(binaryString.length);
	for (let i = 0; i < binaryString.length; i++) {
		data[i] = binaryString.charCodeAt(i);
	}

	if (data[0] !== 0xFF || data[1] !== 0xD8) throw new Error("Invalid jpeg");

	let idx = 2;
	while (idx < data.length) {
		if (data[idx] !== 0xFF) { idx++; continue; }
		const marker = data[idx + 1];
		if (marker === 0xDA) break;

		if (marker === 0xE0) {
			const length = (data[idx + 2] << 8) | data[idx + 3];
			if (
				data[idx + 4] === 0x4A && data[idx + 5] === 0x46 &&
                data[idx + 6] === 0x49 && data[idx + 7] === 0x46 &&
                data[idx + 8] === 0x00
			) {
				if (length >= 16) {
					data[idx + 9] = 1;
					data[idx + 10] = (dpi >> 8) & 0xFF;
					data[idx + 11] = dpi & 0xFF;
					data[idx + 12] = (dpi >> 8) & 0xFF;
					data[idx + 13] = dpi & 0xFF;
				}
				break;
			}
		}
		const segmentLen = (data[idx + 2] << 8) | data[idx + 3];
		idx += segmentLen + 2;
	}

	let newBinaryString = "";
	for (let i = 0; i < data.length; i++) {
		newBinaryString += String.fromCharCode(data[i]);
	}
	return newBinaryString;
}

function updateExifDPI(binaryString, dpi) {
	let exifObj;
	try {
		exifObj = piexif.load(binaryString);
	} catch (e) {

		exifObj = {
			"0th"       : {},
			"Exif"      : {},
			"GPS"       : {},
			"Interop"   : {},
			"1st"       : {},
			"thumbnail" : null,
		};
	}

	if (!exifObj["0th"]) exifObj["0th"] = {};

	exifObj["0th"][piexif.ImageIFD.XResolution] = [dpi, 1];
	exifObj["0th"][piexif.ImageIFD.YResolution] = [dpi, 1];
	exifObj["0th"][piexif.ImageIFD.ResolutionUnit] = 2;
	exifObj["0th"][piexif.ImageIFD.Orientation] = 1;


	const newExifBytes = piexif.dump(exifObj);
	return piexif.insert(newExifBytes, binaryString);
}

const textToImage = async (id, targetDPI = 150) => {
	const element = document.getElementById(id);
	if (!element) return undefined;

	await document.fonts.ready;

	const width = element.clientWidth * 5;
	const height = element.clientHeight * 5;

	const imgDataUrl = await domtoimage.toJpeg(element, {
		width  : width,
		height : height,
		style  : {
			transform       : `scale(${5})`,
			transformOrigin : "top left",
			background      : "white",
			width           : `${element.clientWidth}px`,
			height          : `${element.clientHeight}px`,
		},
	});

	const base64Data = imgDataUrl.split(",")[1];
	let binaryString = atob(base64Data);

	binaryString = updateJfifDPI(binaryString, targetDPI);

	binaryString = updateExifDPI(binaryString, targetDPI);

	const newBase64 = btoa(binaryString);

	// if (newBase64) {
	// 	const downloadBase64Image = (base64String, filename = "imagen.jpg") => {
	// 		const link = document.createElement("a");
	// 		link.href = base64String;
	// 		link.download = filename;

	// 		document.body.appendChild(link);
	// 		link.click();
	// 		document.body.removeChild(link);
	// 	};

	// 	downloadBase64Image(`data:image/jpeg;base64,${newBase64}`, "imagen.jpg");
	// }

	return `data:image/jpeg;base64,${newBase64}`;
};

export default textToImage;
