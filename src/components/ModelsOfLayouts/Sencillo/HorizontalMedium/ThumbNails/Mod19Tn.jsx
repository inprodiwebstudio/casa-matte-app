import { Stack, Group } from "@mantine/core";
//Own components
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";

const Mod19Tn = ({photos}) => {
	return (
		<Group
			w="100%"
			h="100%"
			p="20%"
			pl="15%"
			pr="15%"
			spacing={"0.1em"}
		>
			<Stack
				w="calc(30% - 0.05em)"
				h="100%"
			>
				<ImgLayoutPreview
					imageData={photos?.[0] ?? {}}
				/>
			</Stack>
			<Stack
				w="calc(70% - 0.05em)"
				h="100%"
			>
				<ImgLayoutPreview
					imageData={photos?.[1] ?? {}}
				/>
			</Stack>
		</Group>
	);
};

export default Mod19Tn;
