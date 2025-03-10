import {Stack, Flex }    from "@mantine/core";
import ImgLayout         from "components/LayoutHandler/ImgLayout";
import Text              from "components/LayoutHandler/Text";
import { TextShell }     from "core/components";
import { textInsertion } from "helpers";
//Own components


const Mod57 = ({
	data,
	isInWorkSpace,
	sheetNo,
	isInPaginator,
	isThumbNail,
	pageNo,
	keyIndex,
	modLayout,
}) => {

	const defaultTitle = "<p style='text-align: center;'><span style='font-size: 16px; font-family: JosefinSans-Light;'>PATAGONIA</span></p>";

	return (
		<Flex
			p="8%"
			w="100%"
			h="100%"
			gap="0.1em"
			align="center"
			direction="column"
		>
			<Stack
				w="60%"
				mb="0.15em"
				id={`${pageNo}-${keyIndex}-${modLayout}-text1`}
			>
				<Text
					sizes={{
						"chico"   : "14px",
						"regular" : "15px",
						"grande"  : "16px",
					}}
					align="center"
					sheetNo={sheetNo}
					letterSpacing="1.5px"
					textShell={() => <TextShell.SubTitle />}
					data={textInsertion(data?.text[0], defaultTitle, isInWorkSpace)}
					isInPaginator={isInPaginator}
					isThumbNail={isThumbNail}
					textNo={0}
				/>
			</Stack>
			<Stack
				w="100%"
				h="50%"
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
				h="50%"
			>
				<ImgLayout
					isInWorkSpace={isInWorkSpace}
					sheetNo={sheetNo}
					imageNo={1}
					urlImage={data?.photos[1] ?? {}}
				/>
			</Stack>
		</Flex>
	);
};

export default Mod57;
