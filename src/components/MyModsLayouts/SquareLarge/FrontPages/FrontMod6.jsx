
import {Stack, Flex } from "@mantine/core";
import ImgLayout      from "components/LayoutHandler/ImgLayout";
//Own components
import Text              from "components/LayoutHandler/Text";
import { textInsertion } from "helpers";

const FrontMod6 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {
	const defaultText01 = "Título Grande II";

	return (
		<Flex
			p="8%"
			w="100%"
			h="100%"
			justify="center"
			align="center"
			gap="0.2em"
			direction="column"
		>
			<Stack w="70%" h="fit-content">
				<Text
					align="center"
					type="LargeTitle"
					sheetNo={sheetNo}
					data={textInsertion(data?.text[0], defaultText01, isInWorkSpace)}
					isInPaginator={isInPaginator}
					isThumbNail={isThumbNail}
				/>
			</Stack>
			<Stack w="100%" h="100%">
				<ImgLayout
					isInWorkSpace={isInWorkSpace}
					sheetNo={sheetNo}
					imageNo={0}
					urlImage={data?.photos[0] ?? {}}
				/>
			</Stack>
		</Flex>
	);
};

export default FrontMod6;
