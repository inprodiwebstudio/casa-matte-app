import { Flex, Group, Stack } from "@mantine/core";

//Own components
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";
import { TextShell }    from "core/components";

const Mod57Tn = ({photos}) => {
	return (
		<Flex
			p="8%"
			w="100%"
			h="100%"
			gap="0.1em"
			align="center"
			direction="column"
		>
			<Stack w="60%" mb="0.1em">
				<TextShell.SubTitle />
			</Stack>
			<Group
				w="100%"
				h="calc(100% / 2 - 0.05em)"
				spacing="0.1em"
				grow
			>
				<Stack h="100%" w="calc(100% / 2 - 0.05em)">
					<ImgLayoutPreview
						imageData={photos?.[0] ?? {}}
					/>
				</Stack>
				<Stack h="100%" w="calc(100% / 2 - 0.05em)">
					<ImgLayoutPreview
						imageData={photos?.[1] ?? {}}
					/>
				</Stack>
			</Group>
			<Group
				w="100%"
				h="calc(100% / 2 - 0.05em)"
				spacing="0.1em"
				grow
			>
				<Stack h="100%" w="calc(100% / 2 - 0.05em)">
					<ImgLayoutPreview
						imageData={photos?.[2] ?? {}}
					/>
				</Stack>
				<Stack h="100%" w="calc(100% / 2 - 0.05em)">
					<ImgLayoutPreview
						imageData={photos?.[3] ?? {}}
					/>
				</Stack>
			</Group>
		</Flex>
	);
};

export default Mod57Tn;
