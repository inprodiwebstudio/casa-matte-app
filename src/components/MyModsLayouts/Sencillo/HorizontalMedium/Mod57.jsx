import {Stack, Group} from "@mantine/core";
import ImgLayout      from "components/LayoutHandler/ImgLayout";
//Own components
import Text              from "components/LayoutHandler/Text";
import { TextShell }     from "core/components";
import { textInsertion } from "helpers";


const Mod57 = ({
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
			p="22%"
			pb={isInWorkSpace && "18%" }
			pl="10%"
			pr="10%"
			w="100%"
			h="100%"
			spacing="0.1em"
		>
			<Group
				w="100%"
				h="100%"
				spacing="0.1em"
			>
				<Stack
					h="100%"
					w="calc(30% - 0.05em)"
				>
					<ImgLayout
						isInWorkSpace={isInWorkSpace}
						sheetNo={sheetNo}
						imageNo={0}
						urlImage={data?.photos[0] ?? {}}
					/>
				</Stack>
				<Stack
					h="100%"
					w="calc(70% - 0.05em)"
				>
					<ImgLayout
						isInWorkSpace={isInWorkSpace}
						sheetNo={sheetNo}
						imageNo={1}
						urlImage={data?.photos[1] ?? {}}
					/>
				</Stack>
			</Group>
			<Stack
				w="100%"
				align="flex-end"
				mah="13%"
				{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text1` })}
				style={{
					textTransform : "uppercase",
				}}
			>
				<Text
					sizes={{
						"chico"   : "12px",
						"regular" : "14px",
						"grande"  : "16px",
					}}
					align="flex-end"
					sheetNo={sheetNo}
					textShell={() => <TextShell.SubTitle align="flex-end" />}
					data={textInsertion(data?.text[0], defaultTitle, isInWorkSpace)}
					isInPaginator={isInPaginator}
					isThumbNail={isThumbNail}
					textNo={0}
				/>
			</Stack>
		</Stack>
	);
};

export default Mod57;
