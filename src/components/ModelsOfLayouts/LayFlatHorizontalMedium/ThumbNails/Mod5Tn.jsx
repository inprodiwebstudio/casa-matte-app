import { Stack } from "@mantine/core";
//Own components
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";

const Mod5Tn = ({photos}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			pl="26%"
			pr="26%"
			p="20%"
		>
			<ImgLayoutPreview
				imageData={photos?.[0] ?? {}}
			/>
		</Stack>
	);
};

export default Mod5Tn;
