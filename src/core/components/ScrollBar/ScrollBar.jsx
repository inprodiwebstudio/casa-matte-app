//Own components
import "./ScrollBar.scss";

const ScrollBar = ({children}) => {
	return (
		<div id="ScrollBar" style={{zIndex : "1"}}>
			{children}
		</div>
	);
};

export default ScrollBar;
