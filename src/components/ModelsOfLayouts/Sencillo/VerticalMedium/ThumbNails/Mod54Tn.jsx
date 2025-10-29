import { Flex, Stack }  from "@mantine/core";
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";
//Own components
import { TextShell } from "core/components";

const Mod54Tn = ({photos}) => {
	return (
		<Flex
			pb="22%"
			w="100%"
			h="100%"
			gap="0.5em"
			direction="column"
		>
			<Stack
				spacing={"8%"}
				w="100%"
				h="100%"
				align="flex-end"
			>
				<Stack w="100%" h="100%">
					<ImgLayoutPreview
						imageData={photos?.[0] ?? {}}
					/>
				</Stack>
				<Stack
					w="90%"
					mr="8%"
					spacing={"0.1em"}
				>
					<div>
						<TextShell.Title align="flex-end" />
					</div>
					<Stack>
						<TextShell.SubTitle align="flex-end" />
					</Stack>
				</Stack>
			</Stack>
		</Flex>
	);
};

export default Mod54Tn;
