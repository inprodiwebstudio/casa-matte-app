import {Stack, Flex, Group } from "@mantine/core";
import ImgLayout             from "components/LayoutHandler/ImgLayout";
import Text                  from "components/LayoutHandler/Text";
import { TextShell }         from "core/components";
import { textInsertion }     from "helpers";
//Own components


const Mod57 = ({
	data,
	isInWorkSpace,
	sheetNo,
	isInPaginator,
	isThumbNail,
	pageNo,
	modLayout,
}) => {

	const defaultTitle = "<p style='text-align: center;'><span style='font-size: 18px; font-family: Aitana-Regular;'>TÍTULO</span></p>";

	return (
		<Flex
			p="3%"
			pt={isInWorkSpace ? "5%" : "8%"}
			w="100%"
			h="100%"
			gap="0.1em"
			align="center"
			direction="column"
		>
			<Stack
				w="60%"
				mb={isInWorkSpace ? "17px" : "0.1em"}
				{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text1` })}
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
			<Group
				w="100%"
				h="calc(100% / 2 - 0.05em)"
				spacing="0.1em"
				grow
			>
				<Stack h="100%" w="calc(100% / 2 - 0.05em)">
					<ImgLayout
						isInWorkSpace={isInWorkSpace}
						sheetNo={sheetNo}
						imageNo={0}
						urlImage={data?.photos[0] ?? {}}
					/>
				</Stack>
				<Stack h="100%" w="calc(100% / 2 - 0.05em)">
					<ImgLayout
						isInWorkSpace={isInWorkSpace}
						sheetNo={sheetNo}
						imageNo={1}
						urlImage={data?.photos[1] ?? {}}
					/>
				</Stack>
			</Group>
			<Group
				w="100%"
				h="calc(100% / 2 - 0.05em)"
				spacing="0.1em"
				grow
			>
				<Stack h="100%" w="calc(100% / 2 - 0.05em)">
					<ImgLayout
						isInWorkSpace={isInWorkSpace}
						sheetNo={sheetNo}
						imageNo={2}
						urlImage={data?.photos[2] ?? {}}
					/>
				</Stack>
				<Stack h="100%" w="calc(100% / 2 - 0.05em)">
					<ImgLayout
						isInWorkSpace={isInWorkSpace}
						sheetNo={sheetNo}
						imageNo={3}
						urlImage={data?.photos[3] ?? {}}
					/>
				</Stack>
			</Group>
		</Flex>
	);
};

export default Mod57;
