
import {Stack, Flex} from "@mantine/core";
import ImgLayout     from "components/LayoutHandler/ImgLayout";
//Own components
import Text              from "components/LayoutHandler/Text";
import { textInsertion } from "helpers";

const FrontMod10 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {
	const defaultText01 = "Título Grande";

	return (
		<Flex
			w="100%"
			h="100%"
		>
			<Stack justify="left" w="90%" h="100%">
				<ImgLayout
					isInWorkSpace={isInWorkSpace}
					sheetNo={sheetNo}
					imageNo={0}
					urlImage={data?.photos[0] ?? {}}
				/>
			</Stack>
			<Stack
				sx={{writingMode : "vertical-rl"}}
				pl="0.1em"
				pr="0.1em"
				p="0.2em"
				// w="10%"
			>
				<Text
					align="center"
					type="LargeTitle"
					sheetNo={sheetNo}
					data={textInsertion(data?.text[0], defaultText01, isInWorkSpace)}
					isInPaginator={isInPaginator}
					isThumbNail={isThumbNail}
				/>
			</Stack>
		</Flex>
	);
};

export default FrontMod10;
