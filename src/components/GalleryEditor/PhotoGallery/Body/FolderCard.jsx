import { Stack, Badge, Text, Center } from "@mantine/core";
import FillCircle                     from "components/GalleryEditor/CradAction/FillCircle";
import { changeResolutionImgUrl }     from "helpers/Functions/changeResolutionImgUrl";
import { GoPlus }                     from "react-icons/go";


const FolderCard = ({
	w,
	h,
	urlImage,
	folderName,
}) => {
	return (
		<Stack
			w={w ?? "100%"}
			h={h ?? "100%"}
			p={0}
			m={0}
			style={{
				...(urlImage && {
					background : "url(\"" + changeResolutionImgUrl(urlImage, { width : 200 }, 100) + "\") center center / cover no-repeat",
				}),
				...(!urlImage && {
					background : "#f6f6f6ff",
				}),
				userSelect   : "none",
				borderRadius : "10px",
				position     : "relative",
			}}
		>
			<Badge
				variant="filled"
				w="100%"
				style={{
					position   : "absolute",
					top        : "0px",
					background : "#edeeee",
				}}
			>
				<Text
					style={{
						fontFamily    : "Helvetica",
						letterSpacing : "0px",
						textTransform : "none",
						color         : "black",
					}}
				>
					{folderName ?? "Sin nombre"}
				</Text>
			</Badge>
			{
				!urlImage && (
					<Center
						h="100%"
						w="100%"
						style={{
							cursor : "pointer",
						}}
					>
						<Stack
							align="center"
							spacing={5}
						>
							<FillCircle>
								<GoPlus size={13} />
							</FillCircle>
							<Text
								size="10px"
								color="black"
								weight={500}
								align="center"
								style={{
									fontFamily    : "Helvetica",
									letterSpacing : "0px",
									color         : "black",
								}}
							>
								Agregar Fotos
							</Text>
						</Stack>
					</Center>
				)
			}
		</Stack>
	);
};

export default FolderCard;
