import { Box, Flex, Group, Stack } from "@mantine/core";
//Own components
import Text              from "components/LayoutHandler/Text";
import DividerLayout     from "components/LayoutHandler/DividerLayout";
import { textInsertion } from "helpers";
import { TextShell }     from "core/components";


const Mod45 = ({
	data,
	isInWorkSpace,
	sheetNo,
	isInPaginator,
	isThumbNail,
	pageNo,
	modLayout,
}) => {
	const defaultText01 = "<p style='text-align: left;'><span style='font-size: 30px; font-family: Aitana-Regular;'>PAPÁ</span></p>";

	const defaultText02 = "<p style='text-align: justify;'><span style='font-size: 18px; font-family: Spectral-Light-Italic;'>Obunte cone ingul utura dem fue crissendeli, quit, patam dienterendam med cont. Grat vit, vidensupere, note foridiortui serobse nerox ses, o unum untuam num sentrar idicaed Catus, nor ad mo egilincultus bonsum perunti, Catim quodiemum, num ac mum vestratu istiost ritabutem in notabus nequem invem omnius contimp otisquam factorei tario taremo inatam in stre</span></p>";

	const defaultText03 = "<p style='text-align: justify;'><span style='font-size: 18px; font-family: Spectral-Light-Italic;'>manteliis, et is? P. Sati publin videt verraticae esimoris. La aurnicae que ponsula tqueruntere vereorum Patum quam ac ingulin prorte, quitus ili in temussedo, num pata verobse ntiam. Obunte cone ingul utura dem fue crissendeli, quit, patam dienterendam med cont. Grat vit, vidensupere, note foridiortui serobse nerox ses, o unum untuam num sentrar idicaed.</span></p>";

	return (
		<Flex
			p="8%"
			w="100%"
			h="100%"
			justify="center"
			align="center"
		>
			<Stack
				w="90%"
				mah="70%"
				spacing="0.3em"
				aria-hidden
				sx={{ overflow : "hidden" }}
				{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text1` })}
			>
				<Flex
					direction="column"
					gap="0.2em"
				>
					<Text
						sizes={{
							"chico"   : "28px",
							"regular" : "30px",
							"grande"  : "32px",
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
								"chico"   : "16px",
								"regular" : "18px",
								"grande"  : "20px",
							}}
							align="justify"
							lineHeight="26px"
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
								"chico"   : "16px",
								"regular" : "18px",
								"grande"  : "20px",
							}}
							align="justify"
							lineHeight="26px"
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

export default Mod45;
