import { Flex, Group, Stack } from "@mantine/core";
import ImgLayoutPreview       from "components/LayoutHandler/ImgLayoutPreview";
//Own components
import { TextShell } from "core/components";

const Mod55Tn = ({photos}) => {
	return (
		<Flex
			p="8%"
			w="100%"
			h="100%"
			gap="0.1em"
			align="center"
			direction="column"
		>
			<Stack
				w="60%"
				mb="0.15em"
			>
				<TextShell.SubTitle />
			</Stack>
			<Stack
				w="100%"
				h="calc(100% / 2 - 0.05em)"
			>
				<ImgLayoutPreview
					imageData={photos?.[0] ?? {}}
				/>
			</Stack>
			<Group
				w="100%"
				h="calc(100% / 2 - 0.05em)"
				spacing="0.1em"
				grow
			>
				<Stack h="100%" w="calc(100% / 2 - 0.05em)">
					<ImgLayoutPreview
						imageData={photos?.[1] ?? {}}
					/>
				</Stack>
				<Stack h="100%" w="calc(100% / 2 - 0.05em)">
					<ImgLayoutPreview
						imageData={photos?.[2] ?? {}}
					/>
				</Stack>
			</Group>
		</Flex>
	);
};

export default Mod55Tn;
