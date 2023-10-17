
import {Stack }  from "@mantine/core";
import ImgLayout from "components/LayoutHandler/ImgLayout";
//Own components
import Text              from "components/LayoutHandler/Text";
import { textInsertion } from "helpers";

const FrontMod9 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {
	const defaultText01 = "";

	const defaultText02 = "SUBTITTLE";

	return (
		<Stack
			w="100%"
			h="100%"
			align="left"
			spacing="0.2em"
			direction="column"
		>
			<Stack
				spacing="0.03em"
				mt="8%"
				mr="8%"
			>
				<Text
					align="right"
					type="h1"
					sheetNo={sheetNo}
					data={textInsertion(data?.text[0], defaultText01, isInWorkSpace)}
					isInPaginator={isInPaginator}
					isThumbNail={isThumbNail}
				/>
				<Text
					align="right"
					type="h5"
					sheetNo={sheetNo}
					data={textInsertion(data?.text[1], defaultText02, isInWorkSpace)}
					isInPaginator={isInPaginator}
					isThumbNail={isThumbNail}
				/>
			</Stack>
			<Stack justify="left" w="100%" h="82%">
				<ImgLayout
					isInWorkSpace={isInWorkSpace}
					sheetNo={sheetNo}
					imageNo={0}
					urlImage={data?.photos[0] ?? {}}
				/>
			</Stack>
		</Stack>
	);
};

export default FrontMod9;
