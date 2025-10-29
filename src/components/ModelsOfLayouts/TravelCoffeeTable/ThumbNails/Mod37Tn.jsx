import {Stack, Flex }   from "@mantine/core";
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";
import { TextShell }    from "core/components";
//Own components


const Mod37Tn = ({photos}) => {

	return (
		<Flex
			pb="15%"
			w="100%"
			h="100%"
			gap="0.5em"
			direction="column"
		>
			<Stack
				spacing="0.2em"
				w="100%"
				h="100%"
				align="flex-end"
				sx={{textTransform : "uppercase"}}
			>
				<Stack w="100%" h="100%">
					<ImgLayoutPreview
						imageData={photos?.[0] ?? {}}
					/>
				</Stack>
				<Stack
					maw="70%"
					miw="30%"
					mr="5%"
					spacing="0em"
				>
					<TextShell.Title />
					<Stack>
						<TextShell.SubTitle />
					</Stack>
				</Stack>
			</Stack>
		</Flex>
	);
};

export default Mod37Tn;
