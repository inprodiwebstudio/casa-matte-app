import "./Mod4.scss";

const Mod4 = ({images}) => {
	return (
		<div
			className="body-mod4-layout"
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

export default Mod4;
