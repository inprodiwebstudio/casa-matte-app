
import {Stack, Flex, Group} from "@mantine/core";
import ImgLayout            from "components/LayoutHandler/ImgLayout";

//Own components
import Text              from "components/LayoutHandler/Text";
import { TextShell }     from "core/components";
import { textInsertion } from "helpers";

const FrontMod1 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {
	const defaultText01 = "<p style='text-align: center;'><span style='font-size: 70px; font-family: TAN-MERINGUE;'>AMALFI</span></p>";
	const defaultText02 = "<p style='text-align: center;'><span style='font-size: 20px; font-family: Inter-Lifght;'>ENERO 2023</span></p>";
	const defaultText03 = "<p style='text-align: center;'><span style='font-size: 20px; font-family: Inter-Lifght;'>OAXACA — TEOTITLÁN — SAN JOSÉ — OCOTLÁN</span></p>";

	// const defaultText02 = "<p style='text-align: center;'><span style='font-size: 18px; font-family: Inter-Lifght;'>SUBTÍTULO</span></p>";

	return (
		<Flex
			p="8%"
			w="100%"
			h="100%"
			justify="center"
			align="center"
			gap="0px"
			direction="column"
		>
			<Group
				spacing={(isInPaginator || isThumbNail) ? "1px" : "0px"}
				w={"100%"}
				h="100%"
			>
				<Stack
					w="10%"
					h="100%"
					align="center"
					justify="center"
				>
					<Stack
						sx={{writingMode : "vertical-rl",  transform : "rotate(180deg)"}}
					>
						<Text
							sizes={{
								"chico"   : "18px",
								"regular" : "20px",
								"grande"  : "22px",
							}}
							isFront={true}
							align="center"
							sheetNo={sheetNo}
							textShell={() => <></>}
							data={textInsertion(data?.text[2], defaultText03, isInWorkSpace)}
							isInPaginator={isInPaginator}
							isThumbNail={isThumbNail}
							textNo={2}
						/>
					</Stack>
				</Stack>
				<Stack
					sx={{
						flex : 1,
					}}
					h="100%"
					align="center"
					spacing={isInWorkSpace ? "10%" : "20%"}
				>
					<Stack w="80%">
						<Text
							sizes={{
								"chico"   : "68px",
								"regular" : "70px",
								"grande"  : "72px",
							}}
							isFront={true}
							align="center"
							sheetNo={sheetNo}
							textShell={() => <TextShell.Title />}
							data={textInsertion(data?.text[0], defaultText01, isInWorkSpace)}
							isInPaginator={isInPaginator}
							isThumbNail={isThumbNail}
							textNo={0}
						/>
					</Stack>
					<Stack w="55%" h="70%">
						<ImgLayout
							isInWorkSpace={isInWorkSpace}
							sheetNo={sheetNo}
							imageNo={0}
							urlImage={data?.photos[0] ?? {}}
						/>
					</Stack>
					<Stack
						w="80%"
						mt={isInWorkSpace ? "30%" : "20%"}
					>
						<Text
							sizes={{
								"chico"   : "18px",
								"regular" : "20px",
								"grande"  : "22px",
							}}
							isFront={true}
							align="center"
							sheetNo={sheetNo}
							textShell={() => <TextShell.Title />}
							data={textInsertion(data?.text[1], defaultText02, isInWorkSpace)}
							isInPaginator={isInPaginator}
							isThumbNail={isThumbNail}
							textNo={1}
						/>
					</Stack>
				</Stack>
			</Group>
		</Flex>
	);
};

export default FrontMod1;
