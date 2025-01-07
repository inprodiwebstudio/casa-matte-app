
import {Stack, Flex } from "@mantine/core";
import ImgLayout      from "components/LayoutHandler/ImgLayout";
//Own components
import Text              from "components/LayoutHandler/Text";
import { TextShell }     from "core/components";
import { textInsertion } from "helpers";

const FrontMod2 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {
	const defaultText01 = "<p style='text-align: center;'><span style='font-size: 24px; font-family: Aitana-Regular;'>TÍTULO</span></p>";

	const defaultText02 = "<p style='text-align: center;'><span style='font-size: 12px; font-family: Inter-Lifght;'>SUBTÍTULO</span></p>";

	return (
		<Flex
			p="8%"
			w="100%"
			h="100%"
			justify="center"
			align="center"
			gap="0.2em"
			direction="column"
		>
			<Stack
				w="100%"
				h="100%"
			>
				<ImgLayout
					isInWorkSpace={isInWorkSpace}
					sheetNo={sheetNo}
					imageNo={0}
					urlImage={data?.photos[0] ?? {}}
				/>
			</Stack>
			<Stack
				spacing={(isInPaginator || isThumbNail) ? "1px" : "0px"}
				w={"100%"}
				align="center"
			>
				<Stack w="80%">
					<Text
						sizes={{
							"chico"   : "22px",
							"regular" : "24px",
							"grande"  : "26px",
						}}
						isFront={true}
						align="center"
						sheetNo={sheetNo}
						textShell={() => <TextShell.Title />}
						data={textInsertion(data?.text[0], defaultText01, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
						textNo={0}
					/>
				</Stack>
				<Stack w="50%">
					<Text
						sizes={{
							"chico"   : "10px",
							"regular" : "12px",
							"grande"  : "14px",
						}}
						isFront={true}
						align="center"
						sheetNo={sheetNo}
						textShell={() => <TextShell.SubTitle />}
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

export default FrontMod2;
