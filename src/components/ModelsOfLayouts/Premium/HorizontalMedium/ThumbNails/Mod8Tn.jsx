import { Stack } from "@mantine/core";
//Own components
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";

const Mod8Tn = ({photos}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="10%"
			pl="21%"
			pr="21%"
		>
			<ImgLayoutPreview
				imageData={photos?.[0] ?? {}}
			/>
		</Stack>
	);
};

export default Mod8Tn;
