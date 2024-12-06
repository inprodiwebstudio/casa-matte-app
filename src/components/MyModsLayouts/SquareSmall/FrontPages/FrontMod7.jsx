
import {Stack, Flex } from "@mantine/core";
import ImgLayout      from "components/LayoutHandler/ImgLayout";
//Own components
import Text              from "components/LayoutHandler/Text";
import { TextShell }     from "core/components";
import { textInsertion } from "helpers";

const FrontMod7 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {
	const defaultText01 = "<p style='text-align: center;'><span style='font-size: 42px; font-family: Aitana-Regular;'>TÍTULO</span></p>";

	const defaultText02 = "<p style='text-align: center;'><span style='font-size: 18px; font-family: Inter-Lifght;'>SUBTÍTULO</span></p>";

	const isPreviewThumb = isInPaginator || isThumbNail;

	return (
		<Flex
			pt="7%"
			w="100%"
			h="100%"
			justify="center"
			align="center"
			gap="0.2em"
			direction="column"
		>
			<Stack
				h="fit-content"
				spacing={isPreviewThumb ? "1px" : "0px"}
				w="70%"
			>
				<div>
					<Text
						sizes={{
							"chico"   : "38px",
							"regular" : "42px",
							"grande"  : "44px",
						}}
						align="center"
						sheetNo={sheetNo}
						textShell={() => <TextShell.Title />}
						data={textInsertion(data?.text[0], defaultText01, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
						textNo={0}
					/>
				</div>
				<div
					style={{
						paddingLeft  : "10%",
						paddingRight : "10%",
					}}
				>
					<Text
						sizes={{
							"chico"   : "16px",
							"regular" : "18px",
							"grande"  : "20px",
						}}
						align="center"
						sheetNo={sheetNo}
						textShell={() => <TextShell.SubTitle />}
						data={textInsertion(data?.text[1], defaultText02, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
						textNo={1}
					/>
				</div>
			</Stack>
			<Stack w="100%" h="100%">
				<ImgLayout
					isInWorkSpace={isInWorkSpace}
					sheetNo={sheetNo}
					imageNo={0}
					urlImage={data?.photos[0] ?? {}}
				/>
			</Stack>
		</Flex>
	);
};

export default FrontMod7;
