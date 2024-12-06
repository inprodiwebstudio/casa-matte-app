
import {Stack, Flex} from "@mantine/core";
import ImgLayout     from "components/LayoutHandler/ImgLayout";
//Own components
import Text              from "components/LayoutHandler/Text";
import { TextShell }     from "core/components";
import { textInsertion } from "helpers";

const FrontMod10 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {
	const defaultText01 = "<p style='text-align: center;'><span style='font-size: 30px; font-family: Aitana-Regular;'>TÍTULO GRANDE</span></p>";

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
				sx={{writingMode : "vertical-rl",  transform : "rotate(180deg)"}}
				pl="8%"
				pr="8%"
				p="8%"
			>
				<Text
					sizes={{
						"chico"   : "28px",
						"regular" : "30px",
						"grande"  : "32px",
					}}
					align="center"
					sheetNo={sheetNo}
					textShell={() => <TextShell.Title />}
					data={textInsertion(data?.text[0], defaultText01, isInWorkSpace)}
					isInPaginator={isInPaginator}
					isThumbNail={isThumbNail}
					textNo={0}
				/>
			</Stack>
		</Flex>
	);
};

export default FrontMod10;
