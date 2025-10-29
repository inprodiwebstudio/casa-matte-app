import { Stack } from "@mantine/core";
//Own components
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";

const Mod51Tn = ({photos}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="2%"
			pt="10%"
			pb="10%"
		>
			<ImgLayoutPreview
				imageData={photos?.[0] ?? {}}
			/>
		</Stack>
	);
};

export default Mod51Tn;
