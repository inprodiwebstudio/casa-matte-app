
import {Stack }     from "@mantine/core";
import ImgLayoutOld from "components/LayoutHandler/ImgLayoutOld";
//Own components
import TextFix           from "components/LayoutHandler/TextFix";
import { TextShell }     from "core/components";
import { textInsertion } from "helpers";

const FrontMod9 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {
	const defaultText01 = "<p style='text-align: right;'><span style='font-size: 24px; font-family: Aitana-Regular;'>TÍTULO</span></p>";

	const defaultText02 = "<p style='text-align: right;'><span style='font-size: 12px; font-family: Inter-Lifght;'>SUBTÍTULO</span></p>";

	const isPreviewThumb = isInPaginator || isThumbNail;

	return (
		<Stack
			w="100%"
			h="100%"
			align="left"
			spacing="0.2em"
			direction="column"
			pb="0%"
		>
			<Stack
				spacing={isPreviewThumb ? "1px" : "0px"}
				mt="8%"
				pr="8%"
			>
				<div>
					<TextFix
						sizes={{
							"chico"   : "22px",
							"regular" : "24px",
							"grande"  : "26px",
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
					<TextFix
						sizes={{
							"chico"   : "10px",
							"regular" : "12px",
							"grande"  : "14px",
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
			<Stack justify="left" w="100%" h="80%">
				<ImgLayoutOld
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
