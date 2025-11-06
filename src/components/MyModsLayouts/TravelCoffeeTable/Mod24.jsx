import { Flex, Stack } from "@mantine/core";
//Own components
import TextFix           from "components/LayoutHandler/TextFix";
import DividerLayout     from "components/LayoutHandler/DividerLayout";
import { textInsertion } from "helpers";
import { TextShell }     from "core/components";


const Mod24 = ({
	data,
	isInWorkSpace,
	sheetNo,
	isInPaginator,
	isThumbNail,
	pageNo,
	modLayout,
}) => {

	const defaultText01 = "<p style='text-align: left;'><span style='font-size: 18px; font-family: JosefinSans-Light;'>Title</span></p>";

	const defaultText02 = "<p style='text-align: justify;'><span style='font-size: 14px; font-family: JosefinSans-Light;'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris massa ligula, elementum hendrerit nisl in, dictum tempus ex. Vestibulum nec dui eleifend, vestibulum nibh a, fermentum mauris. Quisque at malesuada dolor. Nullam in eleifend est. In dolor dui, egestas id blandit eget, commodo quis sem. Fusce tincidunt ante ac mi luctus bibendum. Duis vitae sem pretium, aliquam est eget, imperdiet dolor. Curabitur eget augue nec tellus faucibus facilisis tristique sed lectus. Maecenas ac odio ac nisl iaculis aliquam. Nullam mattis finibus ipsum, finibus semper mauris posuere nec. Phasellus vehicula tempor mi, eget commodo magna eleifend vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</span></p>";

	return (
		<Flex
			w="100%"
			h="100%"
			p="10%"
			justify="flex-end"
			{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text1` })}
		>
			<Stack
				w="60%"
				h="100%"
				spacing={"0.3em"}
				justify="flex-end"
			>
				<Stack
					spacing={"0.1em"}
					justify="flex-start"
					align="flex-start"
					w="100%"
					sx={{
						textTransform : "uppercase",
					}}
				>
					<TextFix
						sizes={{
							"chico"   : "16px",
							"regular" : "18px",
							"grande"  : "20px",
						}}
						sheetNo={sheetNo}
						textShell={() => <TextShell.Title align="flex-start" />}
						align="left"
						lineHeight="14px"
						data={textInsertion(data?.text[0], defaultText01, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
						textNo={0}
					/>
					<DividerLayout long="10%" position="h" />
				</Stack>
				<Stack
					w="100%"
				>
					<TextFix
						sizes={{
							"chico"   : "12px",
							"regular" : "14px",
							"grande"  : "16px",
						}}
						sheetNo={sheetNo}
						textShell={() => <TextShell.BodyParagraph />}
						align="justify"
						data={textInsertion(data?.text[1], defaultText02, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
						textNo={1}
					/>
				</Stack>
			</Stack>
		</Flex>
	);
};

export default Mod24;
