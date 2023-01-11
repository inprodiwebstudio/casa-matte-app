//Own components
import "./Mod2.scss";

const Mod2 = ({images}) => {
	return (
		<div className="body-mod2-layout">
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

export default Mod2;
