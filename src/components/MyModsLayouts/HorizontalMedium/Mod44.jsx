import {Stack}   from "@mantine/core";
import ImgLayout from "components/LayoutHandler/ImgLayout";
//Own components
import Text              from "components/LayoutHandler/Text";
import { TextShell }     from "core/components";
import { textInsertion } from "helpers";


const Mod44 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {

	const defaultTitle = "<p style='text-align: center;'><span style='font-size: 30px; font-family: JosefinSans-Light;'>Título 1</span></p>";

	return (
		<Stack
			w="100%"
			h="100%"
			pl="20%"
			pr="20%"
			align="center"
			justify="center"
			spacing={"0.5em"}
		>
			<Stack
				w="100%"
				h="60%"
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
				mah="6%"
				style={{
					textTransform : "uppercase",
				}}
			>
				<Text
					sizes={{
						"chico"   : "28px",
						"regular" : "30px",
						"grande"  : "32px",
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

export default Mod44;
