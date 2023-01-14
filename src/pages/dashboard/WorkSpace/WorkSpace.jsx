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
						pageData={{
							id     : "page1",
							sheet1 : {
								layoutType : "Mod2",
								text       : "",
								photos     : {
									1 : "",
								},
							},
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default WorkSpace;
