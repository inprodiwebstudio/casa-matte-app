
import {Stack, Flex} from "@mantine/core";
import ImgLayout     from "components/LayoutHandler/ImgLayout";
//Own components
import Text              from "components/LayoutHandler/Text";
import { TextShell }     from "core/components";
import { textInsertion } from "helpers";

const FrontMod10 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {
	const defaultText01 = "<p style='text-align: right;'><span style='font-size: 48px; font-family: Aitana-Regular;'>TÍTULO</span></p>";

	const defaultText02 = "<p style='text-align: left;'><span style='font-size: 18px; font-family: Inter-Light;'>SUBTÍTULO</span></p>";

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
				pl="0.1em"
				pr="0.1em"
				p="0.2em"
				align="center"
				justify="space-between"
			>
				<Stack h="50%" sx={{writingMode : "vertical-rl", transform : "rotate(180deg)"}} spacing={0}>
					<Text
						sizes={{
							"chico"   : "46px",
							"regular" : "48px",
							"grande"  : "50px",
						}}
						isFront={true}
						align="right"
						sheetNo={sheetNo}
						textShell={() => <TextShell.Title />}
						data={textInsertion(data?.text[0], defaultText01, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
						textNo={0}
					/>
				</Stack>
				<Stack h="50%" sx={{writingMode : "vertical-rl", transform : "rotate(180deg)"}} spacing={0}>
					<Text
						sizes={{
							"chico"   : "16px",
							"regular" : "18px",
							"grande"  : "20px",
						}}
						isFront={true}
						align="center"
						sheetNo={sheetNo}
						textShell={() => <TextShell.Title />}
						data={textInsertion(data?.text[1], defaultText02, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
						textNo={1}
					/>
				</Stack>
			</Stack>
		</Flex>
	);
};

export default FrontMod10;
