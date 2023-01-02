//Own components
import "./ScrollBar.scss";

const ScrollBar = ({children}) => {
	return (
		<div id="ScrollBar" style={{zIndex : "3"}}>
			{children}
		</div>
	);
};

export default ScrollBar;
