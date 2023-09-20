import {Stack, Flex } from "@mantine/core";
import ImgLayout      from "components/LayoutHandler/ImgLayout";
import Text           from "components/LayoutHandler/Text";
//Own components


const Mod57 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {
	return (
		<Flex
			p="8%"
			w="100%"
			h="100%"
			gap="0.05em"
			align="center"
			direction="column"
		>
			<Stack w="60%" mb="0.15em">
				<Text align="center" type="h4" data="TITLE" isInPaginator={isInPaginator} isThumbNail={isThumbNail} />
			</Stack>
			<Stack
				w="100%"
				h="50%"
			>
				<ImgLayout
					isInWorkSpace={isInWorkSpace}
					sheetNo={sheetNo}
					imageNo={0}
					urlImage={data?.photos[0] ?? {}}
				/>
			</Stack>
			<Stack
				w="100%"
				h="50%"
			>
				<ImgLayout
					isInWorkSpace={isInWorkSpace}
					sheetNo={sheetNo}
					imageNo={1}
					urlImage={data?.photos[1] ?? {}}
				/>
			</Stack>
		</Flex>
	);
};

export default Mod57;
