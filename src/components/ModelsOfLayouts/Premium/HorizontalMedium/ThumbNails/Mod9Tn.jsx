import { Stack } from "@mantine/core";
//Own components
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";

const Mod9Tn = ({photos}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="19%"
			pl="30%"
			pr="30%"
		>
			<ImgLayoutPreview
				imageData={photos?.[0] ?? {}}
			/>
		</Stack>
	);
};

export default Mod9Tn;
