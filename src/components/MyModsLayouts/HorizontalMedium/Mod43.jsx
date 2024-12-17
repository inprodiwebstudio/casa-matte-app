import {Stack, Flex } from "@mantine/core";
import ImgLayout      from "components/LayoutHandler/ImgLayout";
//Own components
import Text              from "components/LayoutHandler/Text";
import { TextShell }     from "core/components";
import { textInsertion } from "helpers";


const Mod43 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {

	const defaultTitle = "<p style='text-align: right;'><span style='font-size: 20px; font-family: JosefinSans-Light;'>Subtítulo 2</span></p>";

	return (
		<Flex
			p="0%"
			w="100%"
			h="100%"
		>
			<Stack
				p="3%"
				w="70%"
				h="100%"
				align="flex-end"
				justify="flex-end"
			>
				<div
					style={{
						textTransform : "uppercase",
						width         : "100%",
					}}
				>
					<Text
						sizes={{
							"chico"   : "18px",
							"regular" : "20px",
							"grande"  : "22px",
						}}
						align="right"
						sheetNo={sheetNo}
						textShell={() => <TextShell.SubTitle align="flex-end" />}
						data={textInsertion(data?.text[0], defaultTitle, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
						textNo={0}
					/>
				</div>
			</Stack>
			<Stack
				w="30%"
				h="100%"
			>
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

export default Mod43;
