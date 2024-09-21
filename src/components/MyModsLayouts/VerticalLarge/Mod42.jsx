import { Flex, Stack } from "@mantine/core";
//Own components
import Text              from "components/LayoutHandler/Text";
import DividerLayout     from "components/LayoutHandler/DividerLayout";
import { textInsertion } from "helpers";
import { TextShell }     from "core/components";


const Mod45 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {
	const defaultText01 = "<p style='text-align: left;'><span style='font-size: 14px; font-family: JosefinSans-Light;'>MAMÁ</span></p>";

	const defaultText02 = "<p style='text-align: justify;'><span style='font-size: 12px; font-family: JosefinSans-Light;'>Obunte cone ingul utura dem fue crissendeli, quit, patam dienterendam med cont. Grat vit, vidensupere, note foridiortui serobse nerox ses, o unum untuam num sentrar idicaed Catus, nor ad mo egilincultus bonsum perunti, Catim quodiemum, num ac mum vestratu istiost ritabutem in notabus nequem invem omnius contimp otisquam factorei tario taremo inatam in stre manteliis, et is? P. Sati publin videt verraticae esimoris. La aurnicae que ponsula tqueruntere vereorum Patum quam ac ingulin prorte, quitus ili in temussedo, num pata verobse ntiam.</span></p>";

	return (
		<Flex
			p="8%"
			w="100%"
			h="100%"
			justify="center"
			align="center"
		>
			<Stack
				w="49%"
				mah="70%"
				spacing="0.15em"
				aria-hidden
			>
				<Flex
					direction="column"
					gap="0.15em"
					justify="flex-start"
				>
					<Text
						sizes={{
							"chico"   : "14px",
							"regular" : "15px",
							"grande"  : "16px",
						}}
						align="left"
						sheetNo={sheetNo}
						textShell={() => <TextShell.SubTitle width="50%" align="flex-start" />}
						data={textInsertion(data?.text[0], defaultText01, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
					/>
					<DividerLayout long="20%" position="h" />
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
						textShell={() => <TextShell.BodyParagraph align="flex-start" />}
						data={textInsertion(data?.text[1], defaultText02, isInWorkSpace)}
						isInPaginator={isInPaginator}
						isThumbNail={isThumbNail}
					/>
				</Flex>
			</Stack>
		</Flex>
	);
};

export default Mod45;
