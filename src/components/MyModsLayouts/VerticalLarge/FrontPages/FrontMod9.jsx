
import {Stack, Flex} from "@mantine/core";
import ImgLayout     from "components/LayoutHandler/ImgLayout";
//Own components
import Text              from "components/LayoutHandler/Text";
import { TextShell }     from "core/components";
import { textInsertion } from "helpers";

const FrontMod9 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {
	const defaultText01 = "<p style='text-align: center;'><span style='font-size: 50px; font-family: Aitana-Regular;'>TÍTULO GRANDE</span></p>";

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
					sizes={{
						"chico"   : "48px",
						"regular" : "50px",
						"grande"  : "52px",
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

export default FrontMod9;
