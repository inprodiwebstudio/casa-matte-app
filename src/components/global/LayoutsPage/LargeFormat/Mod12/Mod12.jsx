import "./Mod12.scss";

const Mod12 = ({images}) => {
	return (
		<div className="body-mod12-layout">
			<div className="content-body">
				<div
					className="content-children-body"
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
				<div
					className="content-children-body"
					{
						...( images && {
							style : {
								backgroundImage    : `url(${images[1]})`,
								backgroundSize     : "cover",
								backgroundRepeat   : "no-repeat",
								backgroundPosition : "center",
							},
						} )
					}
				/>
			</div>
		</div>
	);
};

export default Mod12;
