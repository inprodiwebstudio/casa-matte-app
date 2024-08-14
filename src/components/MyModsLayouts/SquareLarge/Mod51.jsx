import {Stack, Flex } from "@mantine/core";
//Own components
import Text              from "components/LayoutHandler/Text";
import DividerLayout     from "components/LayoutHandler/DividerLayout";
import { textInsertion } from "helpers";


const Mod51 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {

	const defaultText01 = "";

	const defaultText02 = "Subtitulo 1";

	const defaultText03 = "Subtitulo 2";

	const defaultText04 = "Subtitulo 3";

	const defaultText05 = "Subtitulo 4";

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
					<Text
						align="left"
						type="h3"
						sheetNo={sheetNo}
						data={textInsertion(data?.text[0], defaultText01, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
					/>
					<DividerLayout long="20%" position="h" />
				</Stack>
				<Stack
					spacing="0.1em"
				>
					<Text
						align="left"
						type="h5"
						sheetNo={sheetNo}
						data={textInsertion(data?.text[1], defaultText02, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
					/>
					<Text
						align="left"
						type="h5"
						sheetNo={sheetNo}
						data={textInsertion(data?.text[2], defaultText03, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
					/>
					<Text
						align="left"
						type="h5"
						sheetNo={sheetNo}
						data={textInsertion(data?.text[3], defaultText04, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
					/>
					<Text
						align="left"
						type="h5"
						sheetNo={sheetNo}
						data={textInsertion(data?.text[4], defaultText05, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
					/>
				</Stack>
			</Stack>
		</Flex>
	);
};

export default Mod51;
