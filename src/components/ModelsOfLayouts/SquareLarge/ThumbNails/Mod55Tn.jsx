import { Flex, Stack }  from "@mantine/core";
import ImgLayoutPreview from "components/LayoutHandler/ImgLayoutPreview";
import { TextShell }    from "core/components";
//Own components

const Mod55Tn = ({photos}) => {
	return (
		<Flex
			pt="8%"
			pb="8%"
			w="100%"
			h="100%"
			justify="center"
			align="center"
			gap={"0.2em"}
			direction="column"
			sx={{textTransform : "uppercase"}}
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
				w="50%"
			>
				<div>
					<TextShell.SubTitle />
				</div>
			</Stack>
		</Flex>
	);
};

export default Mod55Tn;
