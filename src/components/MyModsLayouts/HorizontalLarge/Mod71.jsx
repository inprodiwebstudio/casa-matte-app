import { Box, Flex, Group, Stack } from "@mantine/core";
//Own components
import Text              from "components/LayoutHandler/Text";
import DividerLayout     from "components/LayoutHandler/DividerLayout";
import { textInsertion } from "helpers";
import { TextShell }     from "core/components";


const Mod71 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {
	const defaultText01 = "<p style='text-align: left;'><span style='font-size: 18px; font-family: JosefinSans-Light;'>EC</span></p>";

	const defaultText02 = "<p style='text-align: justify;'><span style='font-size: 15px; font-family: JosefinSans-Light;'>Lorem ipsum dolor sit amet consectetur adipiscing elit, nascetur feugiat natoque vel nisi est, lacinia in sociis sodales luctus integer. Lectus conubia libero proin tempus molestie feugiat posuere ullamcorper placerat fringilla, litora consequat torquent habitasse commodo inceptos lobortis velit vulputate, magna natoque integer euismod suscipit gravida scelerisque cras aliquet. Tincidunt velit viverra dignissim ridiculus taciti rhoncus nibh senectus semper, pharetra odio conubia dictumst malesuada lectus dis penatibus, primis orci dictum sociosqu nam platea parturient cursus.</span></p>";

	const defaultText03 = "<p style='text-align: justify;'><span style='font-size: 15px; font-family: JosefinSans-Light;'>Et maecenas ante viverra potenti libero purus habitasse aliquam, non massa vivamus dictumst eu erat sodales cursus, integer lacinia rutrum urna aliquet convallis scelerisque. Volutpat condimentum quis taciti fames tempor sagittis eleifend nostra donec, proin ad dis nec sollicitudin dictum viverra semper ridiculus, potenti feugiat odio tellus nisl curabitur nunc phasellus. Luctus iaculis suscipit inceptos mollis quisque nam cum turpis cras, class ante risus ultricies dapibus justo suspendisse enim, cubilia feugiat sed est dui lacinia diam vivamus.</span></p>";

	return (
		<Flex
			pl="23%"
			pr="23%"
			w="100%"
			h="100%"
			justify="center"
			align="center"
		>
			<Stack
				w="100%"
				mah="90%"
				spacing="0.2em"
				aria-hidden
				sx={{ overflow : "hidden" }}
			>
				<Flex
					direction="column"
					gap="0.2em"
					style={{
						textTransform : "uppercase",
					}}
				>
					<Text
						sizes={{
							"chico"   : "16px",
							"regular" : "18px",
							"grande"  : "20px",
						}}
						align="left"
						letterSpacing="3px"
						sheetNo={sheetNo}
						textShell={() => <TextShell.SubTitle width="50%" align="flex-start" />}
						data={textInsertion(data?.text[0], defaultText01, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
						textNo={0}
					/>
					<DividerLayout long="10%" position="h" />
				</Flex>
				<Group
					position="apart"
					align="flex-start"
					spacing={0}
					sx={{ overflow : "hidden" }}
				>
					<Box w="48%">
						<Text
							sizes={{
								"chico"   : "13px",
								"regular" : "15px",
								"grande"  : "18px",
							}}
							align="justify"
							lineHeight="20px"
							sheetNo={sheetNo}
							textShell={() => <TextShell.BodyParagraph width="100%" align="flex-start" />}
							data={textInsertion(data?.text[1], defaultText02, isInWorkSpace)}
							isInPaginator={isInPaginator}
							isThumbNail={isThumbNail}
							textNo={1}
						/>
					</Box>
					<Box w="48%">
						<Text
							sizes={{
								"chico"   : "13px",
								"regular" : "15px",
								"grande"  : "18px",
							}}
							align="justify"
							lineHeight="20px"
							sheetNo={sheetNo}
							textShell={() => <TextShell.BodyParagraph width="100%" align="flex-start" />}
							data={textInsertion(data?.text[2], defaultText03, isInWorkSpace)}
							isInPaginator={isInPaginator}
							isThumbNail={isThumbNail}
							textNo={2}
						/>
					</Box>
				</Group>
			</Stack>
		</Flex>
	);
};

export default Mod71;
