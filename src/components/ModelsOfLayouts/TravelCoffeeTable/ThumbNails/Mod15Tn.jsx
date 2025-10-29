import { Stack, Group } from "@mantine/core";
//Own components
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";
const Mod15Tn = ({photos}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p={"15%"}
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
				<Group spacing={"0.1em"} w="100%" h="calc(50% - 0.05em)">
					<Stack w="calc(50% - 0.05em)" h="100%">
						<ImgLayoutPreview
							imageData={photos?.[2] ?? {}}
						/>
					</Stack>
					<Stack w="calc(50% - 0.05em)" h="100%">
						<ImgLayoutPreview
							imageData={photos?.[3] ?? {}}
						/>
					</Stack>
				</Group>
			</Stack>
		</Stack>
	);
};

export default Mod15Tn;
