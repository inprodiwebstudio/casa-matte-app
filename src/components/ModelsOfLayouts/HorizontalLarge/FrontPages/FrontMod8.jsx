
import {Stack }  from "@mantine/core";
import ImgLayout from "components/LayoutHandler/ImgLayout";
//Own components
import TextFix           from "components/LayoutHandler/TextFix";
import { TextShell }     from "core/components";
import { textInsertion } from "helpers";

const FrontMod8 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {
	const defaultText01 = "<p style='text-align: center;'><span style='font-size: 42px; font-family: Aitana-Regular;'>TÍTULO GRANDE</span></p>";

	const isPreviewThumb = isInPaginator || isThumbNail;

	return (
		<Stack
			w="100%"
			h="100%"
			align="left"
			spacing="0.2em"
			direction="column"
		>
			<Stack
				spacing={isPreviewThumb ? "1px" : "0px"}
				mt="8%"
				sx={{
					textTransform : "uppercase",
				}}
			>
				<div>
					<TextFix
						sizes={{
							"chico"   : "38px",
							"regular" : "42px",
							"grande"  : "44px",
						}}
						isFront={true}
						align="center"
						sheetNo={sheetNo}
						textShell={() => <TextShell.Title width="50%" align="center" />}
						data={textInsertion(data?.text[0], defaultText01, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
						textNo={0}
					/>
				</div>
			</Stack>
			<Stack
				justify="center"
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
		</Stack>
	);
};

export default FrontMod8;
