import {Stack, Flex, Group } from "@mantine/core";
import ImgLayout             from "components/LayoutHandler/ImgLayout";
import Text                  from "components/LayoutHandler/Text";
//Own components


const Mod58 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {
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
			<Group
				w="100%"
				h="50%"
				spacing="0.05em"
				grow
			>
				<Stack h="100%" w="49%">
					<ImgLayout
						isInWorkSpace={isInWorkSpace}
						sheetNo={sheetNo}
						imageNo={0}
						urlImage={data?.photos[0] ?? {}}
					/>
				</Stack>
				<Stack h="100%" w="49%">
					<ImgLayout
						isInWorkSpace={isInWorkSpace}
						sheetNo={sheetNo}
						imageNo={1}
						urlImage={data?.photos[1] ?? {}}
					/>
				</Stack>
			</Group>
			<Group
				w="100%"
				h="50%"
				spacing="0.05em"
				grow
			>
				<Stack h="100%" w="49%">
					<ImgLayout
						isInWorkSpace={isInWorkSpace}
						sheetNo={sheetNo}
						imageNo={2}
						urlImage={data?.photos[2] ?? {}}
					/>
				</Stack>
				<Stack h="100%" w="49%">
					<ImgLayout
						isInWorkSpace={isInWorkSpace}
						sheetNo={sheetNo}
						imageNo={3}
						urlImage={data?.photos[3] ?? {}}
					/>
				</Stack>
			</Group>
		</Flex>
	);
};

export default Mod58;
