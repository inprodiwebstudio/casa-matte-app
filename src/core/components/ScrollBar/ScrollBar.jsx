//Own components
import "./ScrollBar.scss";

const ScrollBar = ({children}) => {
	return (
		<div id="ScrollBar" style={{zIndex : "2000"}}>
			{children}
		</div>
	);
};

export default ScrollBar;
