
import {Stack }  from "@mantine/core";
import ImgLayout from "components/LayoutHandler/ImgLayout";
//Own components
import Text              from "components/LayoutHandler/Text";
import { textInsertion } from "helpers";

const FrontMod8 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {
	const defaultText01 = "";

	const defaultText02 = "SUBTITTLE";

	return (
		<Stack
			w="100%"
			h="100%"
			align="left"
			spacing="0.2em"
			direction="column"
			pb="15%"
		>
			<Stack
				spacing="0.03em"
				mt="8%"
				mr="8%"
			>
				<div>
					<Text
						align="right"
						type="h1"
						sheetNo={sheetNo}
						data={textInsertion(data?.text[0], defaultText01, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
					/>
				</div>
				<div>
					<Text
						align="right"
						type="h5"
						sheetNo={sheetNo}
						data={textInsertion(data?.text[1], defaultText02, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
					/>
				</div>
			</Stack>
			<Stack justify="left" w="100%" h="90%">
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

export default FrontMod8;
