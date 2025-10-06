import { Stack } from "@mantine/core";
//Own components
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";

const Mod6Tn = ({photos}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="22.83%"
			pl="0.2em"
			pr="0.2em"
		>
			<ImgLayoutPreview
				imageData={photos?.[0] ?? {}}
			/>
		</Stack>
	);
};

export default Mod6Tn;
