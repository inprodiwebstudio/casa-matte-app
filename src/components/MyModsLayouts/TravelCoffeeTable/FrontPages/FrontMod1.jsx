
import {Stack, Flex, Group} from "@mantine/core";
import ImgLayout            from "components/LayoutHandler/ImgLayout";

//Own components
import TextFix           from "components/LayoutHandler/TextFix";
import { TextShell }     from "core/components";
import { textInsertion } from "helpers";

const FrontMod1 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {
	const defaultText01 = "<p style='text-align: center;'><span style='font-size: 72px; font-family: TAN-MERINGUE;'>AMALFI</span></p>";
	const defaultText02 = "<p style='text-align: center;'><span style='font-size: 22px; font-family: Inter-Lifght;'>ENERO 2023</span></p>";
	const defaultText03 = "<p style='text-align: center;'><span style='font-size: 22px; font-family: Inter-Lifght;'>OAXACA — TEOTITLÁN — SAN JOSÉ — OCOTLÁN</span></p>";

	return (
		<Flex
			p="0%"
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
						<TextFix
							sizes={{
								"chico"   : "18px",
								"regular" : "20px",
								"grande"  : "22px",
							}}
							isFront={true}
							align="center"
							typeText="subtitle"
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
					justify="center"
					spacing={isInWorkSpace ? "0%" : "20%"}
				>
					<Stack
						w="80%"
						sx={{
							textTransform : "uppercase",
						}}
					>
						<TextFix
							sizes={{
								"chico"   : "68px",
								"regular" : "70px",
								"grande"  : "72px",
							}}
							typeText="title"
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
					<Stack
						w={isInWorkSpace ? "350px" : "70%"}
						h={isInWorkSpace ? "350px" : "90%"}
						mt={isInWorkSpace ? "70px" : "0%"}
						mb={isInWorkSpace ? "150px" : "0%"}
					>
						<ImgLayout
							isInWorkSpace={isInWorkSpace}
							sheetNo={sheetNo}
							imageNo={0}
							urlImage={data?.photos[0] ?? {}}
						/>
					</Stack>
					<Stack
						w="80%"
						mt={isInWorkSpace ? "0%" : "20%"}
					>
						<TextFix
							sizes={{
								"chico"   : "18px",
								"regular" : "20px",
								"grande"  : "22px",
							}}
							isFront={true}
							align="center"
							sheetNo={sheetNo}
							typeText="subtitle"
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
