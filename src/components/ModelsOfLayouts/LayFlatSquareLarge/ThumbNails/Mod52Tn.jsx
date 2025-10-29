import { Stack } from "@mantine/core";
//Own components
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";

const Mod52Tn = ({photos}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="3%"
			pt="25%"
			pb="25%"
		>
			<ImgLayoutPreview
				imageData={photos?.[0] ?? {}}
			/>
		</Stack>
	);
};

export default Mod52Tn;
