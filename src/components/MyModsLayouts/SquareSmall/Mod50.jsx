import { Flex, Stack } from "@mantine/core";
import DividerLayout   from "components/LayoutHandler/DividerLayout";
//Own components
import Text              from "components/LayoutHandler/Text";
import { TextShell }     from "core/components";
import { textInsertion } from "helpers";


const Mod50 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {

	const defaultTitle01 = "<p style='text-align: left;'><span style='font-size: 34px; font-family: JosefinSans-Light;'>ESPAÑA</span></p>";

	const defaultTitle02 = "<p style='text-align: left;'><span style='font-size: 34px; font-family: JosefinSans-Light;'>FRANCIA</span></p>";

	const defaultTitle03 = "<p style='text-align: left;'><span style='font-size: 34px; font-family: JosefinSans-Light;'>TURQUÍA</span></p>";

	const defaultIndice01 = "<p style='text-align: left;'><span style='font-size: 20px; font-family: Inter-Lifght;'>Madrid</span></p><p style='text-align: left;'><span style='font-size: 20px; font-family: Inter-Lifght;'>Segovia</span></p><p style='text-align: left;'><span style='font-size: 20px; font-family: Inter-Lifght;'>Salamanca</span></p>";

	const defaultIndice02 = "<p style='text-align: left;'><span style='font-size: 20px; font-family: Inter-Lifght;'>París</span></p><p style='text-align: left;'><span style='font-size: 20px; font-family: Inter-Lifght;'>Versalles</span></p>";

	const defaultIndice03 = "<p style='text-align: left;'><span style='font-size: 20px; font-family: Inter-Lifght;'>Estambul</span></p><p style='text-align: left;'><span style='font-size: 20px; font-family: Inter-Lifght;'>Capadocia</span></p>";

	return (
		<Flex
			w="100%"
			h="100%"
			justify="center"
			align="center"
			direction="column"
			sx={{overflow : "hidden"}}
		>
			<Stack
				spacing="0.35em"
				miw="30%"
				sx={{
					textTransform : "uppercase",
				}}
			>
				<Stack
					spacing="0.3em"
					aria-hidden
				>
					<div>
						<Text
							sizes={{
								"chico"   : "32px",
								"regular" : "34px",
								"grande"  : "36px",
							}}
							align="left"
							letterSpacing="3px"
							sheetNo={sheetNo}
							textShell={() => <TextShell.TitleSmall width="100%" align="left" />}
							data={textInsertion(data?.text[0], defaultTitle01, isInWorkSpace)}
							isInPaginator={isInPaginator}
							isThumbNail={isThumbNail}
						/>
					</div>
					<DividerLayout long="0.3em" position="h" />
					<div>
						<Text
							sizes={{
								"chico"   : "18px",
								"regular" : "20px",
								"grande"  : "22px",
							}}
							align="left"
							gapSpacing="20px"
							sheetNo={sheetNo}
							textShell={() => <TextShell.BodyIndices align="left" />}
							data={textInsertion(data?.text[1], defaultIndice01, isInWorkSpace)}
							isInPaginator={isInPaginator}
							isThumbNail={isThumbNail}
						/>
					</div>
				</Stack>
				<Stack
					spacing="0.3em"
					aria-hidden
				>
					<div>
						<Text
							sizes={{
								"chico"   : "22px",
								"regular" : "24px",
								"grande"  : "26px",
							}}
							align="left"
							letterSpacing="3px"
							sheetNo={sheetNo}
							textShell={() => <TextShell.TitleSmall width="100%" align="left" />}
							data={textInsertion(data?.text[5], defaultTitle02, isInWorkSpace)}
							isInPaginator={isInPaginator}
							isThumbNail={isThumbNail}
						/>
					</div>
					<DividerLayout long="0.3em" position="h" />
					<div>
						<Text
							sizes={{
								"chico"   : "18px",
								"regular" : "20px",
								"grande"  : "22px",
							}}
							align="left"
							gapSpacing="20px"
							sheetNo={sheetNo}
							textShell={() => <TextShell.BodyIndices align="left" />}
							data={textInsertion(data?.text[6], defaultIndice02, isInWorkSpace)}
							isInPaginator={isInPaginator}
							isThumbNail={isThumbNail}
						/>
					</div>
				</Stack>
				<Stack
					mah="70%"
					spacing="0.3em"
				>
					<div>
						<Text
							sizes={{
								"chico"   : "22px",
								"regular" : "24px",
								"grande"  : "26px",
							}}
							align="left"
							letterSpacing="3px"
							sheetNo={sheetNo}
							textShell={() => <TextShell.TitleSmall width="100%" align="left" />}
							data={textInsertion(data?.text[5], defaultTitle03, isInWorkSpace)}
							isInPaginator={isInPaginator}
							isThumbNail={isThumbNail}
						/>
					</div>
					<DividerLayout long="0.3em" position="h" />
					<div>
						<Text
							sizes={{
								"chico"   : "18px",
								"regular" : "20px",
								"grande"  : "22px",
							}}
							align="left"
							gapSpacing="20px"
							sheetNo={sheetNo}
							textShell={() => <TextShell.BodyIndices align="left" />}
							data={textInsertion(data?.text[6], defaultIndice03, isInWorkSpace)}
							isInPaginator={isInPaginator}
							isThumbNail={isThumbNail}
						/>
					</div>
				</Stack>
			</Stack>
		</Flex>
	);
};

export default Mod50;
