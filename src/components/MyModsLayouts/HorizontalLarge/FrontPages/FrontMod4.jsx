
import {Stack, Flex } from "@mantine/core";
import ImgLayoutOld   from "components/LayoutHandler/ImgLayoutOld";
//Own components
import Text              from "components/LayoutHandler/Text";
import { TextShell }     from "core/components";
import { textInsertion } from "helpers";

const FrontMod4 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {
	const defaultText01 = "<p style='text-align: right;'><span style='font-size: 42px; font-family: Aitana-Regular;'>TÍTULO</span></p>";

	const defaultText02 = "<p style='text-align: right;'><span style='font-size: 18px; font-family: Inter-Lifght;'>SUBTÍTULO</span></p>";

	return (
		<Flex
			w="100%"
			h="100%"
			align="left"
			gap="0.2em"
			direction="column"
		>
			<Stack
				spacing="2px"
				mt="8%"
				mr="8%"
			>
				<Stack>
					<Text
						sizes={{
							"chico"   : "38px",
							"regular" : "42px",
							"grande"  : "44px",
						}}
						isFront={true}
						align="right"
						sheetNo={sheetNo}
						textShell={() => <TextShell.Title align="flex-end" width="30%" />}
						data={textInsertion(data?.text[0], defaultText01, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
						textNo={0}
					/>
				</Stack>
				<Stack>
					<Text
						sizes={{
							"chico"   : "16px",
							"regular" : "18px",
							"grande"  : "20px",
						}}
						isFront={true}
						align="right"
						sheetNo={sheetNo}
						textShell={() => <TextShell.SubTitle align="flex-end" width="20%" />}
						data={textInsertion(data?.text[1], defaultText02, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
						textNo={1}
					/>
				</Stack>
			</Stack>
			<Stack justify="left" w="75%" h="85%">
				<ImgLayoutOld
					isInWorkSpace={isInWorkSpace}
					sheetNo={sheetNo}
					imageNo={0}
					urlImage={data?.photos[0] ?? {}}
				/>
			</Stack>
		</Flex>
	);
};

export default FrontMod4;
