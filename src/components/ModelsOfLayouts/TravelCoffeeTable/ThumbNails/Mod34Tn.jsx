import {Stack, Flex }   from "@mantine/core";
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";
//Own components
import { TextShell } from "core/components";


const Mod34Tn = ({photos}) => {

	return (
		<Flex
			p="20%"
			pt="8%"
			pb="8%"
			w="100%"
			h="100%"
			justify="center"
			align="center"
			gap="0.2em"
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

export default Mod34Tn;
