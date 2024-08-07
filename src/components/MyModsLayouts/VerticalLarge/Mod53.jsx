import {Stack, Flex } from "@mantine/core";
import ImgLayout      from "components/LayoutHandler/ImgLayout";
//Own components
import Text              from "components/LayoutHandler/Text";
import { textInsertion } from "helpers";


const Mod53 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {

	const defaultText = "";

	return (
		<Flex
			p="8%"
			pl="4%"
			pr="4%"
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
					<Text
						align="center"
						type="h1"
						sheetNo={sheetNo}
						data={textInsertion(data?.text[0], defaultText, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
					/>
				</div>
			</Stack>
			<Stack w="100%" h="100%">
				<ImgLayout
					isInWorkSpace={isInWorkSpace}
					sheetNo={sheetNo}
					imageNo={0}
					urlImage={data?.photos[0] ?? {}}
				/>
			</Stack>
			<Stack
				spacing="0.07em"
				w="50%"
			>
				<div>
					<Text
						align="center"
						type="h5"
						sheetNo={sheetNo}
						data={textInsertion(data?.text[1], defaultText, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
					/>
				</div>
			</Stack>
		</Flex>
	);
};

export default Mod53;
