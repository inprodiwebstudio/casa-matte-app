import { Group, Box }                from "@mantine/core";
import SpineCover                    from "./SpineCover";
import photoBooksConfing             from "core/constants/photoBooksConfing";
import frontThemesTextures           from "core/constants/frontThemesColors";
import { shallowEqual, useSelector } from "react-redux";

const CoverBook = ({
	isInPaginator,
	isThumbNail,
	isInWorkSpace,
}) => {
	const photoBookData = useSelector((state) => state.workSpaceSlice.data, shallowEqual);
	const coverData = useSelector((state) => state.workSpaceSlice.data.cover);

	const currentPhotoBook = photoBookData?.product ?? "white";

	const photoBookFormat = photoBookData?.format ?? "vertical";

	const photobookSize = photoBookData?.sizePhotoBook ?? "grande";

	const aspectRatio = photoBooksConfing[currentPhotoBook]?.[photoBookFormat]?.sizes?.[photobookSize]?.aspectRatio;

	const handleLayoutMod = () => {
		if (photoBookData?.frontPage?.sheet1?.layoutType) {
			const LayoutMod = photoBooksConfing[currentPhotoBook]?.[photoBookFormat]?.sizes?.[photobookSize]?.layoutMods[photoBookData?.frontPage?.sheet1?.layoutType]?.layout;
			if (LayoutMod) {
				return <LayoutMod
					isThumbNail={isThumbNail}
					isInPaginator={isInPaginator}
					data={photoBookData?.frontPage?.sheet1}
					isInWorkSpace={isInWorkSpace}
					sheetNo={1}
				/>;
			}
		}
		return <></>;
	};

	console.log(coverData?.material);

	return (
		<Group
			spacing={0}
			h="105.1%"
			style={{
				backgroundColor : !coverData ? "white" : frontThemesTextures[coverData?.material][coverData?.color].color,
				aspectRatio     : `${aspectRatio[0]*2}/${aspectRatio[1]}`,
				boxShadow       : "0px 0px 15px rgba(35, 35, 35, 0.332)",
				position        : "relative",
			}}
		>
			<Group
				w="100%"
				h="100%"
				spacing={0}
				style={{
					position         : "absolute",
					top              : 0,
					left             : 0,
					right            : 0,
					bottom           : 0,
					backgroundImage  : coverData && `url(${frontThemesTextures[coverData?.material][coverData?.color].textureUrl})`,
					backgroundSize   : (coverData?.material === "CURPIEL") ? "cover" : "50% 100%",
					backgroundRepeat : coverData?.material === "CURPIEL" ? "no-repeat" : "repeat",
					opacity          : 0.7,
				}}
			>
				&nbsp;
			</Group>
			<Group
				w="100%"
				h="100%"
				spacing={0}
				style={{
					zIndex : 0,
				}}
			>
				<Box
					style={{
						height : "100%",
						flex   : 1,
					}}
				>
				&nbsp;
				</Box>
				<SpineCover isThumbNail={isThumbNail} isInPaginator={isInPaginator} />
				<Box
					style={{
						height : "100%",
						flex   : 1,
					}}
				>
					{
						photoBookData?.frontPage?.sheet1?.layoutType && (
							handleLayoutMod()
						)
					}
				</Box>
			</Group>
		</Group>
	);
};

export default CoverBook;
