import { Stack, Group } from "@mantine/core";
//Own components
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";
const Mod10Tn = ({photos}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="2%"
		>
			<Stack w="100%" h="100%" spacing={"0.1em"}>
				<Group spacing={"0.1em"} w="100%" h="calc(50% - 0.05em)">
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
				<Stack h="calc(50% - 0.05em)" w="100%">
					<ImgLayoutPreview
						imageData={photos?.[2] ?? {}}
					/>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default Mod10Tn;
