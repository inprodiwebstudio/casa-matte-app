//Own components
import TextLineSkeleton from "../../TextLineSkeleton";
import { TextArea }     from "core/components";

import "./ModText.scss";

const ModText = ({isInWorkSpcae}) => {
	return (
		<div className="body-mod-text">
			<div className="content-body">
				{
					isInWorkSpcae ? (
						<TextArea />
					) : (
						<TextLineSkeleton />
					)
				}
			</div>
		</div>
	);
};

export default ModText;
