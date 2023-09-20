import {Stack, Flex } from "@mantine/core";
import ImgLayout      from "components/LayoutHandler/ImgLayout";
//Own components
import Text from "components/LayoutHandler/Text";


const Mod54 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {
	return (
		<Flex
			pt="8%"
			// pb="8%"
			w="100%"
			h="100%"
			align="flex-end"
			gap="0.5em"
			direction="column"
		>
			<Stack
				spacing="0.4em"
				w="59%"
				h="88%"
			>
				<Stack mr="10%">
					<Text align="right" type="h1" data="" isInPaginator={isInPaginator} isThumbNail={isThumbNail} />
				</Stack>
				<Stack w="100%" h="100%">
					<ImgLayout
						isInWorkSpace={isInWorkSpace}
						sheetNo={sheetNo}
						imageNo={0}
						urlImage={data?.photos[0] ?? {}}
					/>
				</Stack>
				<Stack mr="10%" mt="9%">
					<Text align="left" type="h5" data="" isInPaginator={isInPaginator} isThumbNail={isThumbNail} />
				</Stack>
			</Stack>
		</Flex>
	);
};

export default Mod54;
