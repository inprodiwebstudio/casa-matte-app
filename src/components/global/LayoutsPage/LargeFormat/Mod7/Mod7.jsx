import "./Mod7.scss";

const Mod7 = ({images}) => {
	return (
		<div className="body-mod7-layout">
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

export default Mod7;
