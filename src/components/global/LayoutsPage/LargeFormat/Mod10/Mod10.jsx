import "./Mod10.scss";

const Mod10 = ({images}) => {
	return (
		<div className="body-mod10-layout">
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

export default Mod10;
