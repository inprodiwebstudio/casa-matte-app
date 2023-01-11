//Own components
import "./Mod1.scss";

const Mod1 = ({images}) => {
	return (
		<div
			className="body-mod1-layout"
			{
				...( images && {
					style : {
						backgroundImage    : `url(${images[0]})`,
						backgroundSize     : "cover",
						backgroundRepeat   : "no-repeat",
						backgroundPosition : "center",
					},
				} )
			}
		/>
	);
};

export default Mod1;
