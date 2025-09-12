import { Stack } from "@mantine/core";
//Own components
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";

const Mod1Tn = ({photos}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			style={{
				background : "red",
			}}
		>
			<ImgLayoutPreview
				imageData={photos?.[0] ?? {}}
			/>
		</Stack>
	);
};

export default Mod1Tn;
