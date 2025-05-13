
//React FileRobotEditor
import FilerobotImageEditor, {
	TABS,
} from "react-filerobot-image-editor";
import { connect }        from "react-redux";
import { closeAllModals } from "@mantine/modals";


//Own components
import { workSpaceSlice } from "store/Slices";
import { bindAll }        from "helpers";
import fullQualityImg     from "helpers/Functions/fullQualityImage";
// import "./EditPhoto.scss";
import useSubmitImages   from "helpers/Hooks/useSubmitImages";
import { PostingConfig } from "Notifications";


const EditPhoto = ({innerProps, userName, workSpaceSlice}) => {
	const { handlerUploadImage } = useSubmitImages({userName : userName});

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
		<div className="EditPhoto">
			<FilerobotImageEditor
				source={urlImage}
				annotationsCommon={{
					fill : "#bb3214",
				}}
				isVisible={true}
				moreSaveOptions={[
					{
						label   : "Guardar",
						onClick : (triggerSaveModal, triggerSave) =>
							triggerSave(async (...args) => {
								const file = dataURLtoFile(args[0].imageBase64, args[0].fullName);
								await addEditedImage(file);
								return;
							}),
					},
				]}
				theme={{
				  palette : {
				        "accent-primary"        : "#E9E4D9",
						"accent-primary-hover"  : "grey",
				        "bg-primary-active"     : "#E9E4D9",
						"accent-primary-active" : "#1D1D1B",
				  },
				  typography : {
				    fontFamily : "Arial",
				  },
				}}
				Crop={{
					noPresets : true,
					ratio     : innerProps?.aspectRatio ?? 16 / 9,
				}}
				language="es"
				Rotate={{ angle : 90, componentType : "buttons" }}
				tabsIds={[TABS.ADJUST, TABS.FILTERS, TABS.FINETUNE]} // or {['Adjust', 'Annotate', 'Watermark']}
				defaultTabId={TABS.ADJUST} // or 'Annotate'
				// defaultToolId={TOOLS.TEXT} // or 'Text'
			/>
		</div>
	);
};

const mapDispatchToProps = bindAll({ workSpaceSlice : workSpaceSlice?.actions });

const mapStateToProps = ({ authSlice }) => ({
	userName : authSlice?.user?.username ?? undefined,
});

export default connect(mapStateToProps, mapDispatchToProps) (EditPhoto);
