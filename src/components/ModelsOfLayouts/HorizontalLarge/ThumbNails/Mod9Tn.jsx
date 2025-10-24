import { Stack } from "@mantine/core";
//Own components
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";

const Mod9Tn = ({photos}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			pt={"27%"}
			pb={"27%"}
			p="15%"
		>
			<ImgLayoutPreview
				imageData={photos?.[0] ?? {}}
			/>
		</Stack>
	);
};

export default Mod9Tn;
