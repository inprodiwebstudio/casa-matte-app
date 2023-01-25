//React FileRobotEditor
import FilerobotImageEditor, {
	TABS,
} from "react-filerobot-image-editor";

const EditPhoto = () => {
	return (
		<div>
			<FilerobotImageEditor
				source="https://scaleflex.airstore.io/demo/stephen-walker-unsplash.jpg"
				onSave={(editedImageObject, designState) =>
					console.log("saved", editedImageObject, designState)}
				// onClose={closeImgEditor}
				annotationsCommon={{
					fill : "#bb3214",
				}}
				// theme={{
				//   palette: {
				//     "accent-primary": "blue",
				//     "bg-primary-active": "blue",
				//     "accent-primary-hover": "#da5"
				//   },
				//   typography: {
				//     fontFamily: "Helvetica"
				//   }
				// }}
				language="es"
				Text={{ text : "Filerobot..." }}
				Rotate={{ angle : 90, componentType : "slider" }}
				tabsIds={[TABS.ADJUST, TABS.FILTERS, TABS.FINETUNE]} // or {['Adjust', 'Annotate', 'Watermark']}
				defaultTabId={TABS.ADJUST} // or 'Annotate'
				// defaultToolId={TOOLS.TEXT} // or 'Text'
			/>
		</div>
	);
};

export default EditPhoto;
