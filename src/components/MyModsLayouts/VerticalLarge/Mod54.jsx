import {Stack, Flex, Group } from "@mantine/core";
import ImgLayout             from "components/LayoutHandler/ImgLayout";
import Text                  from "components/LayoutHandler/Text";
import { textInsertion }     from "helpers";
//Own components


const Mod56 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {

	const defaultText01 = "TITLE";

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
				<Text
					align="center"
					type="h4"
					sheetNo={sheetNo}
					data={textInsertion(data?.text[0], defaultText01, isInWorkSpace)}
					isInPaginator={isInPaginator}
					isThumbNail={isThumbNail}
				/>
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
						imageNo={1}
						urlImage={data?.photos[1] ?? {}}
					/>
				</Stack>
				<Stack h="100%" w="49%">
					<ImgLayout
						isInWorkSpace={isInWorkSpace}
						sheetNo={sheetNo}
						imageNo={2}
						urlImage={data?.photos[2] ?? {}}
					/>
				</Stack>
			</Group>
		</Flex>
	);
};

export default Mod56;
