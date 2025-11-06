import { Flex, Stack } from "@mantine/core";
//Own components
import Text              from "components/LayoutHandler/Text";
import { textInsertion } from "helpers";
import { TextShell }     from "core/components";


const Mod25 = ({
	data,
	isInWorkSpace,
	sheetNo,
	isInPaginator,
	isThumbNail,
	pageNo,
	modLayout,
}) => {

	const defaultText01 = "<p style='text-align: left;'><span style='font-size: 18px; font-family: JosefinSans-Light;'>Title</span></p>";

	const defaultText02 = "<p style='text-align: justify;'><span style='font-size: 14px; font-family: JosefinSans-Light;'>Vivamus non eros non elit placerat ullamcorper sit amet nec lorem. Nunc eget placerat mi. Aliquam magna felis, fermentum ac metus at, convallis pellentesque felis. Nulla purus eros, laoreet et varius eu, feugiat non tortor. Phasellus molestie consequat rhoncus. Etiam pretium euismod magna, ac varius metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus quis magna tincidunt, varius purus eget, vestibulum orci. Morbi augue magna, commodo eu ipsum id, lobortis pellentesque ante. Vestibulum sed interdum magna, id consectetur justo. Ut vitae ultrices magna, eget blandit nibh. Curabitur et turpis augue. Nunc eu turpis hendrerit, scelerisque neque eget, tristique nisl. Maecenas erat neque, consequat a dapibus sit amet, ullamcorper vitae leo.<br /><br />Aenean sed ante molestie mauris hendrerit tempor at vel dui. Praesent tincidunt nunc dui, vel euismod nisl tristique ac. Phasellus eleifend condimentum leo sit amet semper. Donec sem sapien, vehicula quis euismod eget, varius vel ligula. Pellentesque vel justo viverra, semper dolor in, auctor ante. Curabitur ac rhoncus nunc. Curabitur lorem dolor, aliquet vitae ultricies eget, auctor id elit. Quisque facilisis molestie dolor vel porta. Aenean blandit diam diam. Aenean elementum non justo ut posuere. Vivamus blandit metus vitae dui imperdiet, ornare viverra ipsum sagittis. Curabitur porttitor velit quis feugiat tincidunt. Etiam venenatis tristique ante, ut tristique elit tempus a. Nulla porttitor velit eu eros sollicitudin, ut eleifend lorem cursus. Fusce rhoncus massa odio.<br/><br/>Suspendisse quis enim scelerisque, vehicula risus at, consectetur orci. Pellentesque eget egestas purus. Proin et ultrices neque. Ut dictum feugiat tincidunt. Sed sit amet porttitor risus. Cras scelerisque molestie gravida. Praesent aliquam sapien at ligula aliquet consectetur. Maecenas et eros fermentum, euismod justo at, mollis orci. Integer ultricies magna quis sem porta dictum.</span></p>";

	return (
		<Flex
			w="100%"
			h="100%"
			p="15%"
			pl="25%"
			pr="25%"
			justify="center"
			align="center"
			{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text1` })}
		>
			<Stack
				w="100%"
				h="100%"
				spacing={"0.2em"}
				justify="center"
			>
				<Stack
					justify="flex-start"
					align="flex-start"
					w="100%"
					sx={{
						textTransform : "uppercase",
					}}
				>
					<Text
						sizes={{
							"chico"   : "16px",
							"regular" : "18px",
							"grande"  : "20px",
						}}
						sheetNo={sheetNo}
						textShell={() => <TextShell.Title align="flex-start" />}
						align="right"
						lineHeight="14px"
						data={textInsertion(data?.text[0], defaultText01, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
						textNo={0}
					/>
				</Stack>
				<Stack
					w="100%"
				>
					<Text
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

export default Mod25;
