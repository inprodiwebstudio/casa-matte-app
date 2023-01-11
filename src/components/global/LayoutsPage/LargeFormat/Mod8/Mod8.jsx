import "./Mod8.scss";

const Mod8 = ({images}) => {
	return (
		<div className="body-mod8-layout">
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

export default Mod8;
