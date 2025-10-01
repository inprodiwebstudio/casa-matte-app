import { Stack } from "@mantine/core";
//Own components
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";

const Mod1Tn = ({photos}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			style={{
				background : "E3E3E3",
			}}
		>
			<ImgLayoutPreview
				imageData={photos?.[0] ?? {}}
			/>
		</Stack>
	);
};

export default Mod1Tn;
