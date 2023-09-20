import {Stack, Flex } from "@mantine/core";
import ImgLayout      from "components/LayoutHandler/ImgLayout";
//Own components
import Text from "components/LayoutHandler/Text";


const Mod59 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {
	return (
		<Flex
			pt="15%"
			w="100%"
			h="100%"
			align="center"
			gap="0.5em"
			direction="column"
		>
			<Stack
				spacing="0.07em"
			>
				<Text align="left" type="h4" data="TITLE" isInPaginator={isInPaginator} isThumbNail={isThumbNail} />
			</Stack>
			<Stack w="45%" h="63%">
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

export default Mod59;
