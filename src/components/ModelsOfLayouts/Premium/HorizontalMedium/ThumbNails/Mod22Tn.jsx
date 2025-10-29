import { Stack } from "@mantine/core";
//Own components
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";

const Mod22Tn = ({photos}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="3%"
			pl="30%"
			pr="30%"
		>
			<Stack
				spacing="0.1em"
				w="100%"
				h="100%"
			>
				<Stack
					h="33.33%"
					w="100%"
				>
					<ImgLayoutPreview
						imageData={photos?.[0] ?? {}}
					/>
				</Stack>
				<Stack
					h="33.33%"
					w="100%"
				>
					<ImgLayoutPreview
						imageData={photos?.[1] ?? {}}
					/>
				</Stack>
				<Stack
					h="33.33%"
					w="100%"
				>
					<ImgLayoutPreview
						imageData={photos?.[2] ?? {}}
					/>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default Mod22Tn;
