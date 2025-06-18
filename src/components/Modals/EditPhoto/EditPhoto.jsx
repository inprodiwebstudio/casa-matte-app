
//React PhotoEditor
// eslint-disable-next-line import/no-extraneous-dependencies
import { PinturaEditor } from "@pqina/react-pintura";
// eslint-disable-next-line import/no-extraneous-dependencies
import { getEditorDefaults } from "@pqina/pintura";

import { connect }        from "react-redux";
import { closeAllModals } from "@mantine/modals";


//Own components
import { useState }       from "react";
import { workSpaceSlice } from "store/Slices";
import { bindAll }        from "helpers";
import fullQualityImg     from "helpers/Functions/fullQualityImage";
import useSubmitImages    from "helpers/Hooks/useSubmitImages";
import { PostingConfig }  from "Notifications";

//Styles
// eslint-disable-next-line import/no-extraneous-dependencies
import "@pqina/pintura/pintura.css";

const EditPhoto = ({innerProps, userName, workSpaceSlice}) => {
	const { handlerUploadImage } = useSubmitImages({userName : userName});

	const [inlineResult, setInlineResult] = useState();

	const urlImage = fullQualityImg(innerProps?.image);

	const addEditedImage = async (file) => {
		try {
			const myImage = await handlerUploadImage(file, true);
			workSpaceSlice.addPhotoEdited({pageId : innerProps?.pageId, sheetNo : innerProps?.sheetNo, layoutNo : innerProps?.layoutNo, imageUrl : myImage?.url});
			closeAllModals();
		} catch (error) {
			PostingConfig["post"][500]();
			console.error(error);
		}
	};

	const dataURLtoFile = (dataurl, filename) => {
		let arr = dataurl.split(","),
			mime = arr[0].match(/:(.*?);/)[1],
			bstr = atob(arr[1]),
			n = bstr.length,
			u8arr = new Uint8Array(n);

		while (n--) {
			u8arr[n] = bstr.charCodeAt(n);
		}
		return new File([u8arr], filename, {type : mime});
	};

	return (
		<div style={{ height : "700px" }}>
			<PinturaEditor
				{...getEditorDefaults()}
				src={urlImage}
				onProcess={(res) =>
					setInlineResult(URL.createObjectURL(res.dest))}
			/>

			{inlineResult && <img src={inlineResult} alt="" />}
		</div>
	);
};

const mapDispatchToProps = bindAll({ workSpaceSlice : workSpaceSlice?.actions });

const mapStateToProps = ({ authSlice }) => ({
	userName : authSlice?.user?.username ?? undefined,
});

export default connect(mapStateToProps, mapDispatchToProps) (EditPhoto);
