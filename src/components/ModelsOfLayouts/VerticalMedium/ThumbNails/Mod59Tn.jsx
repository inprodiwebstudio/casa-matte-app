import { Stack } from "@mantine/core";

//Own components
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";

const Mod58Tn = ({photos}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			pt="40%"
			pb="40%"
			pl="10%"
			pr="10%"
		>
			<ImgLayoutPreview
				imageData={photos?.[0] ?? {}}
			/>
		</Stack>
	);
};

export default Mod58Tn;
