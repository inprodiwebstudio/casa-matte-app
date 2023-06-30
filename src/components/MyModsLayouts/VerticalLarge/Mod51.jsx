import {Stack, Flex } from "@mantine/core";
//Own components
import Text          from "components/LayoutHandler/Text";
import DividerLayout from "components/LayoutHandler/DividerLayout";


const Mod51 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {
	return (
		<Flex
			p="8%"
			w="100%"
			h="100%"
			justify="flex-end"
			align="flex-end"
			gap="0.1em"
			direction="column"
		>
			<Stack
				spacing="0.15em"
				sx={{overflow : "hidden"}}
				w="25%"
			>
				<Stack
					spacing="0.07em"
				>
					<Text align="left" type="h3" data="" isInPaginator={isInPaginator} isThumbNail={isThumbNail} />
					<DividerLayout long="20%" position="h" />
				</Stack>
				<Stack
					spacing="0.1em"
				>
					<Text align="left" type="h5" data="Subtitulo 1" isInPaginator={isInPaginator} isThumbNail={isThumbNail} />
					<Text align="left" type="h5" data="Subtitulo 2" isInPaginator={isInPaginator} isThumbNail={isThumbNail} />
					<Text align="left" type="h5" data="Subtitulo 3" isInPaginator={isInPaginator} isThumbNail={isThumbNail} />
					<Text align="left" type="h5" data="Subtitulo 4" isInPaginator={isInPaginator} isThumbNail={isThumbNail} />
				</Stack>
			</Stack>
		</Flex>
	);
};

export default Mod51;
