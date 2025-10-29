import { Flex, Stack }  from "@mantine/core";
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";
import { TextShell }    from "core/components";
//Own components

const Mod56Tn = ({photos}) => {
	return (
		<Flex
			pb={"0.5em"}
			w="100%"
			h="100%"
			direction="column"
		>
			<Stack
				spacing={"0.3em"}
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
					pr="0.7em"
				>
					<TextShell.Title width="40%" align="flex-end" />
					<Stack w="100%">
						<TextShell.SubTitle width="20%" align="flex-end" />
					</Stack>
				</Stack>
			</Stack>
		</Flex>
	);
};

export default Mod56Tn;
