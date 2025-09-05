import { Group, Box }                from "@mantine/core";
import SpineCover                    from "./SpineCover";
import photoBooksConfing             from "core/constants/photoBooksConfing";
import frontThemesTextures           from "core/constants/frontThemesColors";
import { shallowEqual, useSelector } from "react-redux";
import { useEffect, useState }       from "react";
import { PageIdProvider }            from "contexts/pageIdContext";

const CoverBook = ({
	isInPaginator,
	isThumbNail,
	isInWorkSpace,
}) => {
	const [ showModLayout, setShowModLayout ] = useState(false);

	const photoBookData = useSelector((state) => state.workSpaceSlice.data, shallowEqual);
	const coverData = useSelector((state) => state.workSpaceSlice.data.cover);

	const currentPhotoBook = photoBookData?.product ?? "white";

	const photoBookFormat = photoBookData?.format ?? "vertical";

	const photobookSize = photoBookData?.sizePhotoBook ?? "grande";

	const aspectRatio = photoBooksConfing[currentPhotoBook]?.[photoBookFormat]?.sizes?.[photobookSize]?.aspectRatio;

	const isSencilloPhotoBook = currentPhotoBook === "sencillo";

	const marginSizesSencillo = {
		"cuadrado" : {
			"grande" : "65px",
			"chico"  : "40px",
		},
		"vertical" : {
			"grande"  : "70px",
			"mediano" : "43px",
		},
		"horizontal" : {
			"grande"  : "65px",
			"mediano" : "50px",
		},
	};

	const sizeMarginSencillo = marginSizesSencillo[photoBookFormat]?.[photobookSize];

	const handleLayoutMod = () => {
		if (photoBookData?.frontPage?.sheet1?.layoutType) {
			const LayoutMod = photoBooksConfing[currentPhotoBook]?.[photoBookFormat]?.sizes?.[photobookSize]?.layoutMods[photoBookData?.frontPage?.sheet1?.layoutType]?.layout;
			if (LayoutMod) {
				return (
					<div
						style={{
							width      : "100%",
							height     : "100%",
							transition : "all 0.2s ease-in-out",
							...(isInWorkSpace && {opacity : showModLayout ? 1 : 0 }),
						}}
					>
						<LayoutMod
							isThumbNail={isThumbNail}
							isInPaginator={isInPaginator}
							data={photoBookData?.frontPage?.sheet1}
							isInWorkSpace={isInWorkSpace}
							sheetNo={1}
						/>
					</div>
				);
			}
		}
		return <></>;
	};

	useEffect(() => {
		setTimeout(() => {
			setShowModLayout(true);
		}, 10);
	}, []);

	return (
		<PageIdProvider pageId="frontpage" isPaginatorBar={isInPaginator}>
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
						backgroundSize   : (coverData?.material === "PIEL VEGANA") ? "50% 100%" : "cover",
						backgroundRepeat : (coverData?.material === "PIEL VEGANA") ? "repeat" : "no-repeat",
						opacity          : 0.6,
					}}
				>
				&nbsp;
				</Group>
				{
					(isSencilloPhotoBook && isInWorkSpace) && (
						<>
							<div
								style={{
									position       : "absolute",
									width          : "100%",
									height         : sizeMarginSencillo,
									background     : "#35353599",
									backdropFilter : "blur(3px)",
									top            : 0,
									zIndex         : 1,
									fontSize       : "0.1em",
									display        : "flex",
									justifyContent : "center",
									alignItems     : "center",
									color          : "#fff",
									gap            : "30px",
									overflow       : "hidden",
								}}
							>
								<div>
									- AREA - DE - CORTE -
								</div>
								<div>
									- AREA - DE - CORTE -
								</div>
								<div>
									- AREA - DE - CORTE -
								</div>
								<div>
									- AREA - DE - CORTE -
								</div>
								<div>
									- AREA - DE - CORTE -
								</div>
								<div>
									- AREA - DE - CORTE -
								</div>
								<div>
									- AREA - DE - CORTE -
								</div>
								<div>
									- AREA - DE - CORTE -
								</div>
							</div>
							<div
								style={{
									position       : "absolute",
									width          : "100%",
									height         : sizeMarginSencillo,
									background     : "#35353599",
									backdropFilter : "blur(3px)",
									bottom         : 0,
									zIndex         : 1,
									fontSize       : "0.1em",
									display        : "flex",
									justifyContent : "center",
									alignItems     : "center",
									color          : "#fff",
									gap            : "30px",
									overflow       : "hidden",
								}}
							>
								<div>
									- AREA - DE - CORTE -
								</div>
								<div>
									- AREA - DE - CORTE -
								</div>
								<div>
									- AREA - DE - CORTE -
								</div>
								<div>
									- AREA - DE - CORTE -
								</div>
								<div>
									- AREA - DE - CORTE -
								</div>
								<div>
									- AREA - DE - CORTE -
								</div>
								<div>
									- AREA - DE - CORTE -
								</div>
								<div>
									- AREA - DE - CORTE -
								</div>
							</div>
							<div
								style={{
									position       : "absolute",
									width          : sizeMarginSencillo,
									height         : `calc(100% - ${sizeMarginSencillo} - ${sizeMarginSencillo})`,
									background     : "#35353599",
									backdropFilter : "blur(3px)",
									top            : sizeMarginSencillo,
									left           : 0,
									zIndex         : 1,
									fontSize       : "0.1em",
									display        : "flex",
									justifyContent : "center",
									alignItems     : "center",
									color          : "#fff",
									gap            : "30px",
									overflow       : "hidden",
									writingMode    : "vertical-rl",
								}}
							>
								<div>
									- AREA - DE - CORTE -
								</div>
								<div>
									- AREA - DE - CORTE -
								</div>
								<div>
									- AREA - DE - CORTE -
								</div>
							</div>
							<div
								style={{
									position       : "absolute",
									width          : sizeMarginSencillo,
									height         : `calc(100% - ${sizeMarginSencillo} - ${sizeMarginSencillo})`,
									background     : "#35353599",
									backdropFilter : "blur(3px)",
									top            : sizeMarginSencillo,
									right          : 0,
									zIndex         : 1,
									fontSize       : "0.1em",
									display        : "flex",
									justifyContent : "center",
									alignItems     : "center",
									color          : "#fff",
									gap            : "30px",
									overflow       : "hidden",
									writingMode    : "vertical-rl",
								}}
							>
								<div>
									- AREA - DE - CORTE -
								</div>
								<div>
									- AREA - DE - CORTE -
								</div>
								<div>
									- AREA - DE - CORTE -
								</div>
							</div>
						</>
					)
				}
				{
					isSencilloPhotoBook && (
						<Group
							w="100%"
							h="100%"
							spacing={0}
							style={{
								position   : "absolute",
								top        : 0,
								left       : 0,
								right      : 0,
								bottom     : 0,
								background : "transparent",
								...(isInWorkSpace && {border : `${sizeMarginSencillo} solid #c4c3c3`}),
							}}
						>
					&nbsp;
						</Group>
					)
				}
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
		</PageIdProvider>
	);
};

export default CoverBook;
