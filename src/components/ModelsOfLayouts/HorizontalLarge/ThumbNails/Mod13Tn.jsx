import { Stack } from "@mantine/core";
//Own components
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";

const Mod13Tn = ({photos}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="22%"
			pl="35%"
			pr="35%"
		>
			<ImgLayoutPreview
				imageData={photos?.[0] ?? {}}
			/>
		</Stack>
	);
};

export default Mod13Tn;
