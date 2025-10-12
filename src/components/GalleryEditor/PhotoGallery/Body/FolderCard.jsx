import { Stack, Badge, Text }     from "@mantine/core";
import { changeResolutionImgUrl } from "helpers/Functions/changeResolutionImgUrl";


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
				backgroundImage    : "url(\"" + changeResolutionImgUrl(urlImage, { width : 200 }, 100) + "\")",
				backgroundSize     : "cover",
				backgroundPosition : "center",
				backgroundRepeat   : "no-repeat",
				// background         : "#f6f6f6",
				userSelect         : "none",
				borderRadius       : "10px",
				position           : "relative",
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
		</Stack>
	);
};

export default FolderCard;
