import { Stack } from "@mantine/core";
//Own components
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";

const Mod13Tn = ({photos}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="25%"
			pl="20%"
			pr="20%"
		>
			<Stack
				spacing="0.1em"
				w="100%"
				h="100%"
			>
				<Stack w="100%" h="50%">
					<ImgLayoutPreview
						imageData={photos?.[0] ?? {}}
					/>
				</Stack>
				<Stack w="100%" h="50%">
					<ImgLayoutPreview
						imageData={photos?.[1] ?? {}}
					/>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default Mod13Tn;
