import { Stack } from "@mantine/core";
//Own components
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";

const Mod36Tn = ({photos}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="4%"
			pl="8%"
			pr="8%"
		>
			<ImgLayoutPreview
				imageData={photos?.[0] ?? {}}
			/>
		</Stack>
	);
};

export default Mod36Tn;
