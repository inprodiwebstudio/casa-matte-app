import {Stack, Flex }   from "@mantine/core";
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";
//Own components
import { TextShell } from "core/components";


const Mod35Tn = ({photos}) => {

	return (
		<Flex
			p="4%"
			pt="12%"
			pb="12%"
			w="100%"
			h="100%"
			justify="center"
			align="center"
			gap="0.5em"
			direction="column"
		>
			<Stack
				spacing="0.07em"
				w="70%"
			>
				<div>
					<TextShell.Title />
				</div>
			</Stack>
			<Stack w="100%" h="100%">
				<ImgLayoutPreview
					imageData={photos?.[0] ?? {}}
				/>
			</Stack>
			<Stack
				spacing="0.07em"
				w="60%"
			>
				<div>
					<TextShell.SubTitle />
				</div>
			</Stack>
		</Flex>
	);
};

export default Mod35Tn;
