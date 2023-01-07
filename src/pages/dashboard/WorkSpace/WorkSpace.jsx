//Own components
import FormatPage from "components/FormatPage";
import "./WorkSpace.scss";

const WorkSpace = () => {
	return (
		<div className="WorkSpace">
			<div className="canva-space">
				<div className="ghost-canva">
					<FormatPage
						typeFormat="LargeFormat"
						page1="Mod10"
						page2="Mod13"
						images={[
							"https://ik.imagekit.io/joabMedel/cmtImage_PjxZ4-FHNE.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1672942995835",
							"https://ik.imagekit.io/joabMedel/cmtImage_PjxZ4-FHNE.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1672942995835",
						]}
					/>
				</div>
			</div>
		</div>
	);
};

export default WorkSpace;
