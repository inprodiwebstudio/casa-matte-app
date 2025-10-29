import { Stack, Group } from "@mantine/core";
//Own components
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";
const Mod9Tn = ({photos}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="2%"
			pt="33%"
			pb="33%"
		>
			<Group spacing={"0.1em"} w="100%" h="100%">
				<Stack w="calc(50% - 0.05em)" h="100%">
					<ImgLayoutPreview
						imageData={photos?.[0] ?? {}}
					/>
				</Stack>
				<Stack w="calc(50% - 0.05em)" h="100%">
					<ImgLayoutPreview
						imageData={photos?.[1] ?? {}}
					/>
				</Stack>
			</Group>
		</Stack>
	);
};

export default Mod9Tn;
