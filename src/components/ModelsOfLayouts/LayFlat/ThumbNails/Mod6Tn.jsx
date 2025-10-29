import { Stack } from "@mantine/core";
//Own components
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";

const Mod6Tn = ({photos}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="27%"
			pl="11%"
			pr="11%"
		>
			<ImgLayoutPreview
				imageData={photos?.[0] ?? {}}
			/>
		</Stack>
	);
};

export default Mod6Tn;
