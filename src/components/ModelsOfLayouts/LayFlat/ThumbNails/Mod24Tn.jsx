import { Stack } from "@mantine/core";
//Own components
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";

const Mod24Tn = ({photos}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="4%"
			pl="31%"
			pr="31%"
		>
			<Stack
				spacing="0.1em"
				h="100%"
				w="100%"
			>
				<Stack w="100%" h="33.33%">
					<ImgLayoutPreview
						imageData={photos?.[0] ?? {}}
					/>
				</Stack>
				<Stack w="100%" h="33.33%">
					<ImgLayoutPreview
						imageData={photos?.[1] ?? {}}
					/>
				</Stack>
				<Stack w="100%" h="33.33%">
					<ImgLayoutPreview
						imageData={photos?.[2] ?? {}}
					/>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default Mod24Tn;
