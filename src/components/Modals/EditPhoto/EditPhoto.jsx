//React
import { useEffect } from "react";

//React FileRobotEditor
import FilerobotImageEditor, {
	TABS,
} from "react-filerobot-image-editor";
import { connect }        from "react-redux";
import { closeAllModals } from "@mantine/modals";


//Own components
import { workSpaceSlice } from "store/Slices";
import { apiImageKit }    from "store/api/imageKitApi";
import { bindAll }        from "helpers";
import "./EditPhoto.scss";

const EditPhoto = ({innerProps, userName, workSpaceSlice}) => {
	const [galleryImagesMutation, galleryMutationResult] = apiImageKit.useAddEditedImageMutation();

	const addEditedImage = async (file) => {
		await galleryImagesMutation({
			data : {
				file,
			},
			userName,
		});
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

	useEffect(() => {
		if (!galleryMutationResult?.isError && !galleryMutationResult?.isLoading && !galleryMutationResult?.isUninitialized && galleryMutationResult?.data) {
			workSpaceSlice.addPhotoEdited({pageId : innerProps?.pageId, sheetNo : innerProps?.sheetNo, layoutNo : innerProps?.layoutNo, imageUrl : galleryMutationResult?.data?.url});
		}
	}, [galleryMutationResult]);

	return (
		<div className="EditPhoto">
			<FilerobotImageEditor
				source={innerProps?.image}
				annotationsCommon={{
					fill : "#bb3214",
				}}
				moreSaveOptions={[
					{
						label   : "Guardar",
						onClick : (triggerSaveModal, triggerSave) =>
							triggerSave(async (...args) => {
								const file = dataURLtoFile(args[0].imageBase64, args[0].fullName);
								await addEditedImage(file);
								closeAllModals();
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
				    fontFamily : "Helvetica, Arial",
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
