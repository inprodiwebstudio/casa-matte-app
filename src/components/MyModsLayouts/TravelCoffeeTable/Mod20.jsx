import { Center, Stack } from "@mantine/core";
//Own components
import Text              from "components/LayoutHandler/Text";
import { textInsertion } from "helpers";
import { TextShell }     from "core/components";

const Mod20 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {

	const defaultText01 = "<p style='text-align: right;'><span style='font-size: 30px; font-family: JosefinSans-Light;'>TÍTULO 1</span></p>";
	const defaultText02 = "<p style='text-align: right;'><span style='font-size: 14px; font-family: JosefinSans-Light;'>Subtítulo 1</span></p>";

	return (
		<Center
			w="100%"
			h="100%"
			p={"2%"}
			pb={"13%"}
		>
			<Stack
				w={"100%"}
				h={"100%"}
				align="flex-end"
				justify="flex-end"
				pr={"8%"}
			>
				<Stack
					w="80%"
					sx={{
						overflow      : "hidden",
						textTransform : "uppercase !important",
					}}
					spacing="0"
				>
					<Stack>
						<Text
							sizes={{
								"chico"   : "28px",
								"regular" : "30px",
								"grande"  : "32px",
							}}
							sheetNo={sheetNo}
							textShell={() => <TextShell.Title align="flex-end" width="60%" />}
							letterSpacing="2.5px"
							data={textInsertion(data?.text[0], defaultText01, isInWorkSpace)}
							isInPaginator={isInPaginator}
							isThumbNail={isThumbNail}
							textNo={0}
						/>
					</Stack>
					<Stack>
						<Text
							sizes={{
								"chico"   : "12px",
								"regular" : "14px",
								"grande"  : "16px",
							}}
							sheetNo={sheetNo}
							textShell={() => <TextShell.SubTitle align="flex-end" width="30%" />}
							letterSpacing="1px"
							data={textInsertion(data?.text[1], defaultText02, isInWorkSpace)}
							isInPaginator={isInPaginator}
							isThumbNail={isThumbNail}
							textNo={1}
						/>
					</Stack>
				</Stack>
			</Stack>
		</Center>
	);
};

export default Mod20;
