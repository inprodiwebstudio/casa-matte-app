import {Stack }  from "@mantine/core";
import ImgLayout from "components/LayoutHandler/ImgLayout";
//Own components
import Text              from "components/LayoutHandler/Text";
import { TextShell }     from "core/components";
import { textInsertion } from "helpers";


const Mod52 = ({
	data,
	isInWorkSpace,
	sheetNo,
	isInPaginator,
	isThumbNail,
	pageNo,
	modLayout,
}) => {

	const defaultTitle = "<p style='text-align: right;'><span style='font-size: 14px; font-family: JosefinSans-Light;'>Subtítulo 2</span></p>";

	return (
		<Stack
			p="13%"
			pl="30%"
			pr="30%"
			pb="10%"
			w="100%"
			h="100%"
			spacing="0.10em"
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
				w="100%"
				mah="10%"
				sx={{
					overflow : "hidden",
				}}
			>
				<Stack
					w="100%"
					align="flex-end"
					h="fit-content"
					{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text1` })}
				>
					<Text
						sizes={{
							"chico"   : "12px",
							"regular" : "14px",
							"grande"  : "16px",
						}}
						align="right"
						sheetNo={sheetNo}
						textShell={() => <TextShell.SubTitle align="flex-end" />}
						data={textInsertion(data?.text[0], defaultTitle, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
						textNo={0}
					/>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default Mod52;
