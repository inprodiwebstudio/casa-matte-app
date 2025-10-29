import { Stack, Group } from "@mantine/core";
//Own components
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";

const Mod16Tn = ({photos}) => {
	return (
		<Group
			w="100%"
			h="100%"
			p="15%"
			pl="4%"
			pr="4%"
			spacing={"0.1em"}
		>
			<Stack
				w="calc(70% - 0.05em)"
				h="100%"
			>
				<ImgLayoutPreview
					imageData={photos?.[0] ?? {}}
				/>
			</Stack>
			<Stack
				w="calc(30% - 0.05em)"
				h="100%"
			>
				<ImgLayoutPreview
					imageData={photos?.[1] ?? {}}
				/>
			</Stack>
		</Group>
	);
};

export default Mod16Tn;
