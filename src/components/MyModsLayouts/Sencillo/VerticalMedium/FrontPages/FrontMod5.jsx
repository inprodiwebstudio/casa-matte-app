
import {Stack, Flex }    from "@mantine/core";
import ImgLayout         from "components/LayoutHandler/ImgLayout";
import { textInsertion } from "helpers";
import Text              from "components/LayoutHandler/Text";
import { TextShell }     from "core/components";


//Own components

const FrontMod5 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {
	const defaultText01 = "<p style='text-align: center;'><span style='font-size: 28px; font-family: Inter-Lifght;'>TÍTULO</span></p>";

	const defaultText02 = "<p style='text-align: center;'><span style='font-size: 10px; font-family: Inter-Lifght;'>SUBTÍTULO</span></p>";

	return (
		<Flex
			p="0%"
			pl="15%"
			w="100%"
			h="100%"
			sx={{position : "relative"}}
		>
			<div
				style={{
					width           : "0.02em",
					height          : "100%",
					position        : "absolute",
					left            : "93%",
					top             : "0",
					backgroundColor : "white",
				}}
			>
                &nbsp;
			</div>
			<div
				style={{
					width           : "100%",
					height          : "0.02em",
					position        : "absolute",
					left            : "0%",
					top             : "5%",
					backgroundColor : "white",
				}}
			>
                &nbsp;
			</div>
			<div
				style={{
					width           : "100%",
					height          : "0.02em",
					position        : "absolute",
					left            : "0%",
					top             : "95%",
					backgroundColor : "white",
				}}
			>
				&nbsp;
			</div>
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
					top          : isInWorkSpace ? "47%" : "47%",
					paddingRight : "14%",
					paddingLeft  : "22%",
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
								"chico"   : "20px",
								"regular" : "28px",
								"grande"  : "34px",
							}}
							isFront={true}
							align="center"
							sheetNo={sheetNo}
							textShell={() => <TextShell.Title width="30px" />}
							data={textInsertion(data?.text[0], defaultText01, isInWorkSpace)}
							isInPaginator={isInPaginator}
							isThumbNail={isThumbNail}
							textNo={0}
						/>
					</Stack>
					<Stack
						w="100%"
						mah={isInWorkSpace ? "40px" : "10px"}
					>
						<Text
							sizes={{
								"chico"   : "5px",
								"regular" : "10px",
								"grande"  : "15px",
							}}
							isFront={true}
							align="center"
							sheetNo={sheetNo}
							textShell={() => <TextShell.SubTitle width="20px" />}
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

export default FrontMod5;
