import { Stack } from "@mantine/core";
//Own components
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";

const Mod15Tn = ({photos}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="10%"
			pl="30%"
			pr="30%"
			spacing={"0.1em"}
		>
			<Stack
				h="calc(50% - 0.05em)"
				w="100%"
			>
				<ImgLayoutPreview
					imageData={photos?.[0] ?? {}}
				/>
			</Stack>
			<Stack
				h="calc(50% - 0.05em)"
				w="100%"
			>
				<ImgLayoutPreview
					imageData={photos?.[1] ?? {}}
				/>
			</Stack>
		</Stack>
	);
};

export default Mod15Tn;
