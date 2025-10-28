import {Stack, Flex }   from "@mantine/core";
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";
import { TextShell }    from "core/components";
//Own components


const Mod36Tn = ({photos}) => {

	return (
		<Flex
			pt="15%"
			w="100%"
			h="100%"
			align="flex-end"
			gap="0.5em"
			direction="column"
		>
			<Stack
				spacing="0.2em"
				w="70%"
				h="80%"
			>
				<Stack w="100%" h="100%" spacing="0.4em">
					<Stack
						mr="10%"
						sx={{textTransform : "uppercase"}}
					>
						<TextShell.Title align="flex-end" />
					</Stack>
					<Stack w="100%" h="100%">
						<ImgLayoutPreview
							imageData={photos?.[0] ?? {}}
						/>
					</Stack>
				</Stack>
				<Stack
					mr="40%"
					sx={{textTransform : "uppercase"}}
				>
					<TextShell.SubTitle align="flex-start" />
				</Stack>
			</Stack>
		</Flex>
	);
};

export default Mod36Tn;
