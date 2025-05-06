const SpineCover = ({
	isInPaginator,
}) => {
	return (
		<div
			style={{
				width       : "5%",
				height      : "100%",
				borderRight : `${isInPaginator ? "1px" : "3px"} solid rgb(217, 216, 216)`,
				borderLeft  : `${isInPaginator ? "1px" : "3px"} solid rgb(217, 216, 216)`,
			}}
		>
			&nbsp;
		</div>
	);
};

export default SpineCover;
