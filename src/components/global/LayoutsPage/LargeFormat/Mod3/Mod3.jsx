//Own components
import "./Mod3.scss";

const Mod3 = ({images}) => {
	return (
		<div className="body-mod3-layout">
			<div
				className="content-body"
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
		</div>
	);
};

export default Mod3;
