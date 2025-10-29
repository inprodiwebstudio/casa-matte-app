import { Stack } from "@mantine/core";
//Own components
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";

const Mod20Tn = ({photos}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="4%"
			pl="33%"
			pr="33%"
			spacing={"0.1em"}
		>
			<Stack
				h="calc(40% - 0.05em)"
				w="100%"
			>
				<ImgLayoutPreview
					imageData={photos?.[0] ?? {}}
				/>
			</Stack>
			<Stack
				h="calc(60% - 0.05em)"
				w="100%"
			>
				<ImgLayoutPreview
					imageData={photos?.[1] ?? {}}
				/>
			</Stack>
		</Stack>
	);
};

export default Mod20Tn;
