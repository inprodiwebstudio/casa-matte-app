import {Stack, Flex }    from "@mantine/core";
import ImgLayout         from "components/LayoutHandler/ImgLayout";
import { textInsertion } from "helpers";

//Own components
import Text from "components/LayoutHandler/Text";


const Mod60 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {

	const defaultText01 = "Subtitle";

	return (
		<Flex
			w="100%"
			h="100%"
			align="center"
			gap="0.1em"
			direction="column"
		>
			<Stack w="45%" h="55%" mt="24%">
				<ImgLayout
					isInWorkSpace={isInWorkSpace}
					sheetNo={sheetNo}
					imageNo={0}
					urlImage={data?.photos[0] ?? {}}
				/>
			</Stack>
			<Stack
				spacing="0.07em"
				w="45%"
				align="right"
			>
				<Text
					align="right"
					type="regular"
					sheetNo={sheetNo}
					data={textInsertion(data?.text[0], defaultText01, isInWorkSpace)}
					isInPaginator={isInPaginator}
					isThumbNail={isThumbNail}
				/>
			</Stack>
		</Flex>
	);
};

export default Mod60;
