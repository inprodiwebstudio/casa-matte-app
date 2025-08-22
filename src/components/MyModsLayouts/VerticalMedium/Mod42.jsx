import { Flex, Stack } from "@mantine/core";
//Own components
import Text              from "components/LayoutHandler/Text";
import DividerLayout     from "components/LayoutHandler/DividerLayout";
import { textInsertion } from "helpers";
import { TextShell }     from "core/components";


const Mod42 = ({
	data,
	isInWorkSpace,
	sheetNo,
	isInPaginator,
	isThumbNail,
	pageNo,
	modLayout,
}) => {
	const defaultText01 = "<p style='text-align: left;'><span style='font-size: 15px; font-family: JosefinSans-Light;'>TÍTULO</span></p>";

	const defaultText02 = "<p style='text-align: justify;'><span style='font-size: 10px; font-family: JosefinSans-Light;'>Obunte cone ingul utura dem fue crissendeli, quit, patam dienterendam med cont. Grat vit, vidensupere, note foridiortui serobse nerox ses, o unum untuam num sentrar idicaed Catus, nor ad mo egilincultus bonsum perunti, Catim quodiemum, num ac mum vestratu istiost ritabutem in notabus nequem invem omnius contimp otisquam factorei tario taremo inatam in stre manteliis, et is? P. Sati publin videt verraticae esimoris. La aurnicae que ponsula tqueruntere vereorum Patum quam ac ingulin prorte, quitus ili in temussedo, num pata verobse ntiam.</span></p>";


	return (
		<Flex
			p="0%"
			w="100%"
			h="100%"
			justify="center"
			align="center"
			{...(isInWorkSpace && { id : `${pageNo}-${modLayout}-text1` })}
		>
			<Stack
				w={isInWorkSpace ? "43%" : "50%"}
				mah="70%"
				spacing="0.17em"
				aria-hidden
			>
				<Flex
					direction="column"
					gap={isInWorkSpace ? "12px" : "0.1em"}
					justify="flex-start"
				>
					<Text
						sizes={{
							"chico"   : "14px",
							"regular" : "15px",
							"grande"  : "16px",
						}}
						align="left"
						letterSpacing="1.7px"
						typeText="subtitle"
						sheetNo={sheetNo}
						textShell={() => <TextShell.SubTitle width="50%" align="flex-start" />}
						data={textInsertion(data?.text[0], defaultText01, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
						textNo={0}
					/>
					<DividerLayout long={isInWorkSpace ? "9%" : "0.5em"} position="h" />
				</Flex>
				<Flex
					justify="flex-start"
					direction="column"
				>
					<Text
						sizes={{
							"chico"   : "11px",
							"regular" : "12px",
							"grande"  : "13px",
						}}
						align="justify"
						sheetNo={sheetNo}
						typeText="body"
						letterSpacing="0.5px"
						lineHeight="13px"
						textShell={() => <TextShell.BodyParagraph align="flex-start" />}
						data={textInsertion(data?.text[1], defaultText02, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
						textNo={1}
					/>
				</Flex>
			</Stack>
		</Flex>
	);
};

export default Mod42;
