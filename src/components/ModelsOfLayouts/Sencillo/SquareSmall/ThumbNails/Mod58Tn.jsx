import { Flex, Stack }  from "@mantine/core";
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";
//Own components
import { TextShell } from "core/components";

const Mod58Tn = ({photos}) => {
	return (
		<Flex
			pb="8%"
			w="100%"
			h="100%"
			direction="column"
		>
			<Stack
				spacing="0.5em"
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
					w="100%"
					spacing={"0.1em"}
					pr="0.5em"
				>
					<TextShell.Title width="40%" align="flex-end" />
					<Stack w="100%" pr={"0px"}>
						<TextShell.SubTitle width="20%" align="flex-end" />
					</Stack>
				</Stack>
			</Stack>
		</Flex>
	);
};

export default Mod58Tn;
