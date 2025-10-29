
import {Stack }  from "@mantine/core";
import ImgLayout from "components/LayoutHandler/ImgLayout";
//Own components
import Text              from "components/LayoutHandler/Text";
import { TextShell }     from "core/components";
import { textInsertion } from "helpers";

const FrontMod8 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {
	const defaultText01 = "<p style='text-align: right;'><span style='font-size: 42px; font-family: Aitana-Regular;'>TÍTULO</span></p>";

	const defaultText02 = "<p style='text-align: right;'><span style='font-size: 18px; font-family: Inter-Lifght;'>SUBTÍTULO</span></p>";

	const isPreviewThumb = isInPaginator || isThumbNail;

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
				spacing={isPreviewThumb ? "1px" : "0px"}
				mt="8%"
				pr="8%"
			>
				<div>
					<Text
						sizes={{
							"chico"   : "38px",
							"regular" : "42px",
							"grande"  : "44px",
						}}
						isFront={true}
						align="right"
						sheetNo={sheetNo}
						textShell={() => <TextShell.Title width="50%" align="flex-end" />}
						data={textInsertion(data?.text[0], defaultText01, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
						textNo={0}
					/>
				</div>
				<div>
					<Text
						sizes={{
							"chico"   : "16px",
							"regular" : "18px",
							"grande"  : "20px",
						}}
						isFront={true}
						align="right"
						sheetNo={sheetNo}
						textShell={() => <TextShell.SubTitle width="30%" align="flex-end" />}
						data={textInsertion(data?.text[1], defaultText02, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
						textNo={1}
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
