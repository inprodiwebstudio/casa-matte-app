
import {Stack, Flex }    from "@mantine/core";
import ImgLayout         from "components/LayoutHandler/ImgLayout";
import { textInsertion } from "helpers";
import Text              from "components/LayoutHandler/Text";
import { TextShell }     from "core/components";


//Own components

const FrontMod2 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {
	const defaultText01 = "<p style='text-align: center;'><span style='font-size: 42px; font-family: Aitana-Regular;'>TÍTULO</span></p>";

	const defaultText02 = "<p style='text-align: center;'><span style='font-size: 18px; font-family: Inter-Lifght;'>SUBTÍTULO</span></p>";

	return (
		<Flex
			p="0%"
			pl="15%"
			w="100%"
			h="100%"
			sx={{position : "relative"}}
		>
			<Stack w="100%" h="100%">
				<ImgLayout
					isInWorkSpace={isInWorkSpace}
					sheetNo={sheetNo}
					imageNo={0}
					isUnderImage
					urlImage={data?.photos[0] ?? {}}
				/>
			</Stack>
			<Stack
				sx={{
					width        : "100%",
					position     : "absolute",
					left         : "0%",
					top          : isInWorkSpace ? "13%" : "16%",
					paddingLeft  : "19%",
					paddingRight : "11%",
				}}
			>
				<Stack
					sx={{
						width  : "100%",
						height : "100%",
					}}
					spacing={!isInWorkSpace ? "0.1em" : "0px"}
					align="center"
				>
					<Stack
						w="100%"
						mah={isInWorkSpace ? "56px" : "10px"}
					>
						<Text
							sizes={{
								"chico"   : "38px",
								"regular" : "42px",
								"grande"  : "44px",
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
					<Stack
						w="80%"
						mah={isInWorkSpace ? "40px" : "10px"}
					>
						<Text
							sizes={{
								"chico"   : "16px",
								"regular" : "18px",
								"grande"  : "20px",
							}}
							isFront={true}
							align="center"
							sheetNo={sheetNo}
							textShell={() => <TextShell.SubTitle />}
							data={textInsertion(data?.text[1], defaultText02, isInWorkSpace)}
							isInPaginator={isInPaginator}
							isThumbNail={isThumbNail}
							textNo={1}
						/>
					</Stack>
				</Stack>
			</Stack>
		</Flex>
	);
};

export default FrontMod2;
