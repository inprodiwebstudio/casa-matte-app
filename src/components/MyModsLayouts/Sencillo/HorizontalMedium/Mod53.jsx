import {Stack }  from "@mantine/core";
import ImgLayout from "components/LayoutHandler/ImgLayout";
//Own components
import TextFix           from "components/LayoutHandler/TextFix";
import { TextShell }     from "core/components";
import { textInsertion } from "helpers";


const Mod53 = ({
	data,
	isInWorkSpace,
	sheetNo,
	isInPaginator,
	isThumbNail,
	pageNo,
	modLayout,
}) => {

	const defaultTitle = "<p style='text-align: center;'><span style='font-size: 14px; font-family: JosefinSans-Light;'>Subtítulo 2</span></p>";

	return (
		<Stack
			p="8%"
			pb={isInWorkSpace && "5%" }
			pl="28%"
			pr="28%"
			w="100%"
			h="100%"
			spacing="0.1em"
		>
			<Stack
				w="100%"
				h="100%"
				spacing="0.1em"
			>
				<Stack
					w="100%"
					h="calc(50% - 0.05em)"
				>
					<ImgLayout
						isInWorkSpace={isInWorkSpace}
						sheetNo={sheetNo}
						imageNo={0}
						urlImage={data?.photos[0] ?? {}}
					/>
				</Stack>
				<Stack
					w="100%"
					h="calc(50% - 0.05em)"
				>
					<ImgLayout
						isInWorkSpace={isInWorkSpace}
						sheetNo={sheetNo}
						imageNo={1}
						urlImage={data?.photos[1] ?? {}}
					/>
				</Stack>
			</Stack>
			<Stack
				w="100%"
				align="center"
				mah="10%"
				sx={{
					textTransform : "uppercase",
				}}
				{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text1` })}
			>
				<TextFix
					sizes={{
						"chico"   : "12px",
						"regular" : "14px",
						"grande"  : "16px",
					}}
					align="center"
					sheetNo={sheetNo}
					textShell={() => <TextShell.SubTitle align="center" />}
					data={textInsertion(data?.text[0], defaultTitle, isInWorkSpace)}
					isInPaginator={isInPaginator}
					isThumbNail={isThumbNail}
					textNo={0}
				/>
			</Stack>
		</Stack>
	);
};

export default Mod53;
