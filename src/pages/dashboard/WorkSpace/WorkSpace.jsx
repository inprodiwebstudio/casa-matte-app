//Own components
import FormatPage from "components/FormatPage";
import "./WorkSpace.scss";

const WorkSpace = () => {
	return (
		<div className="WorkSpace">
			<div className="canva-space">
				<div className="ghost-canva">
					<FormatPage typeFormat="LargeFormat" page1="Mod15" page2="Mod13" />
				</div>
			</div>
		</div>
	);
};

export default WorkSpace;
