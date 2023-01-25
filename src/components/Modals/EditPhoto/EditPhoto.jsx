//React FileRobotEditor
import FilerobotImageEditor, {
	TABS,
} from "react-filerobot-image-editor";

//Own components
import "./EditPhoto.scss";

const EditPhoto = () => {
	return (
		<div className="EditPhoto">
			<FilerobotImageEditor
				source="https://scaleflex.airstore.io/demo/stephen-walker-unsplash.jpg"
				onSave={(editedImageObject, designState) =>
					console.log("saved", editedImageObject, designState)}
				// onClose={closeImgEditor}
				annotationsCommon={{
					fill : "#bb3214",
				}}
				theme={{
				  palette : {
				        "accent-primary"        : "#E9E4D9",
				        "bg-primary-active"     : "#E9E4D9",
						"accent-primary-active" : "#1D1D1B",
				  },
				  typography : {
				    fontFamily : "Helvetica, Arial",
				  },
				}}
				language="es"
				Text={{ text : "Filerobot..." }}
				Rotate={{ angle : 90, componentType : "buttons" }}
				tabsIds={[TABS.ADJUST, TABS.FILTERS, TABS.FINETUNE]} // or {['Adjust', 'Annotate', 'Watermark']}
				defaultTabId={TABS.ADJUST} // or 'Annotate'
				// defaultToolId={TOOLS.TEXT} // or 'Text'
			/>
		</div>
	);
};

export default EditPhoto;
