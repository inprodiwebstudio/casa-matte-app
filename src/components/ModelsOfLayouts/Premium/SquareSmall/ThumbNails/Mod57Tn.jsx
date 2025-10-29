import { Flex, Stack }  from "@mantine/core";
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";
//Own components
import { TextShell } from "core/components";

const Mod57Tn = ({photos}) => {
	return (
		<Flex
			w="100%"
			h="100%"
			align="flex-end"
			justify="center"
			gap="0.3em"
			direction="column"
		>
			<Stack
				spacing="0.3em"
				w="59%"
				h="78%"
				sx={{textTransform : "uppercase"}}
			>
				<Stack
					w="100%"
					h="100%"
					spacing={"0.3em"}
				>
					<Stack
						mr="10%"
						h="fit-content"
					>
						<TextShell.Title />
					</Stack>
					<Stack w="100%" h="100%">
						<ImgLayoutPreview
							imageData={photos?.[0] ?? {}}
						/>
					</Stack>
				</Stack>
				<Stack
					mr="40%"
					h="fit-content"
				>
					<TextShell.SubTitle />
				</Stack>
			</Stack>
		</Flex>
	);
};

export default Mod57Tn;
