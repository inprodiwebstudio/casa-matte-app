import {Stack, Flex } from "@mantine/core";
import ImgLayout      from "components/LayoutHandler/ImgLayout";
//Own components
import Text              from "components/LayoutHandler/Text";
import { TextShell }     from "core/components";
import { textInsertion } from "helpers";


const Mod57 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {

	const defaultTitle = "<p style='text-align: center;'><span style='font-size: 46px; font-family: JosefinSans-Light;'>SANTIAGO</span></p>";

	const defaultSubtitle = "<p style='text-align: center;'><span style='font-size: 22px; font-family: Inter-Lifght;'>CHILE</span></p>";

	return (
		<Flex
			pt="8%"
			pb="8%"
			w="100%"
			h="100%"
			justify="center"
			align="center"
			gap="0.5em"
			direction="column"
			sx={{textTransform : "uppercase"}}
		>
			<Stack
				spacing="0.07em"
				w="70%"
			>
				<div>
					<Text
						sizes={{
							"chico"   : "42px",
							"regular" : "46px",
							"grande"  : "48px",
						}}
						align="center"
						sheetNo={sheetNo}
						textShell={() => <TextShell.Title />}
						letterSpacing="6.5px"
						data={textInsertion(data?.text[0], defaultTitle, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
						textNo={0}
					/>
				</div>
			</Stack>
			<Stack w="100%" h="100%">
				<ImgLayout
					isInWorkSpace={isInWorkSpace}
					sheetNo={sheetNo}
					imageNo={0}
					urlImage={data?.photos[0] ?? {}}
				/>
			</Stack>
			<Stack
				spacing="0.07em"
				w="50%"
			>
				<div>
					<Text
						sizes={{
							"chico"   : "20px",
							"regular" : "22px",
							"grande"  : "24px",
						}}
						align="center"
						sheetNo={sheetNo}
						letterSpacing="2px"
						textShell={() => <TextShell.SubTitle />}
						data={textInsertion(data?.text[1], defaultSubtitle, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
						textNo={1}
					/>
				</div>
			</Stack>
		</Flex>
	);
};

export default Mod57;
