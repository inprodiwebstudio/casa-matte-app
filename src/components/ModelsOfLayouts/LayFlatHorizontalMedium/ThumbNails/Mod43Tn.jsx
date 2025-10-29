import { Stack } from "@mantine/core";
//Own components
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";

const Mod43Tn = ({photos}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			pr="23%"
		>
			<Stack
				h="100%"
				w="100%"
				sx={{
					position : "relative",
				}}
			>
				<Stack w="100%" h="100%">
					<ImgLayoutPreview
						imageData={photos?.[0] ?? {}}
					/>
				</Stack>
				<Stack
					w="38%"
					h="45%"
					sx={{
						position : "absolute",
						top      : "28%",
						left     : "87%",
					}}
				>
					<ImgLayoutPreview
						imageData={photos?.[1] ?? {}}
					/>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default Mod43Tn;
