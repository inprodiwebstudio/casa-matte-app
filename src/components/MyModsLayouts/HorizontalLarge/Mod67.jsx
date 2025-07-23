import {Stack}   from "@mantine/core";
import ImgLayout from "components/LayoutHandler/ImgLayout";
//Own components
import Text              from "components/LayoutHandler/Text";
import { TextShell }     from "core/components";
import { textInsertion } from "helpers";


const Mod67 = ({
	data,
	isInWorkSpace,
	sheetNo,
	isInPaginator,
	isThumbNail,
	pageNo,
	modLayout,
}) => {

	const defaultTitle = "<p style='text-align: center;'><span style='font-size: 30px; font-family: JosefinSans-Light;'>Título 1</span></p>";

	return (
		<Stack
			w="100%"
			h="100%"
			mt="3%"
			pl="16%"
			pr="16%"
			align="center"
			justify="center"
			spacing={isInWorkSpace ? "45px" : "0.2em"}
		>
			<Stack
				w="100%"
				h="65%"
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
				h="10%"
				style={{
					textTransform : "uppercase",
				}}
				{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text1` })}
			>
				<Text
					sizes={{
						"chico"   : "40px",
						"regular" : "42px",
						"grande"  : "44px",
					}}
					align="center"
					letterSpacing="2px"
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

export default Mod67;
