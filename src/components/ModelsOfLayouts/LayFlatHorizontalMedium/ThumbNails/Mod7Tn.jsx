import { Stack } from "@mantine/core";
//Own components
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";

const Mod7Tn = ({photos}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			pl="22%"
			pr="22%"
			p="8%"
		>
			<ImgLayoutPreview
				imageData={photos?.[0] ?? {}}
			/>
		</Stack>
	);
};

export default Mod7Tn;
