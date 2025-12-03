
import {Stack, Flex }    from "@mantine/core";
import { textInsertion } from "helpers";
import { TextShell }     from "core/components";
import ImgLayoutOld      from "components/LayoutHandler/ImgLayoutOld";
import TextFix           from "components/LayoutHandler/TextFix";


//Own components

const FrontMod6 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {
	const defaultText01 = "<p style='text-align: center;'><span style='font-size: 30px; font-family: Inter-Lifght;'>TÍTULO</span></p>";

	const defaultText02 = "<p style='text-align: center;'><span style='font-size: 12px; font-family: Inter-Lifght;'>SUBTÍTULO</span></p>";

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
					width    : "0.02em",
					height   : "100%",
					position : "absolute",
					left     : "93%",
					top      : "0",
				}}
				className="colorLinesCut"
			>
                &nbsp;
			</div>
			<div
				style={{
					width    : "100%",
					height   : "0.02em",
					position : "absolute",
					left     : "0%",
					top      : "5%",
				}}
				className="colorLinesCut"
			>
                &nbsp;
			</div>
			<div
				style={{
					width    : "100%",
					height   : "0.02em",
					position : "absolute",
					left     : "0%",
					top      : "95%",
				}}
				className="colorLinesCut"
			>
				&nbsp;
			</div>
			<Stack w="100%" h="100%">
				<ImgLayoutOld
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
					top          : isInWorkSpace ? "9%" : "17%",
					paddingRight : "15%",
					paddingLeft  : "23%",
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
					>
						<TextFix
							sizes={{
								"chico"   : "25px",
								"regular" : "30px",
								"grande"  : "38px",
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
				</Stack>
			</Stack>
			<Stack
				sx={{
					width        : "100%",
					position     : "absolute",
					left         : "0%",
					top          : isInWorkSpace ? "89%" : "85%",
					paddingRight : "15%",
					paddingLeft  : "23%",
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
					>
						<TextFix
							sizes={{
								"chico"   : "8px",
								"regular" : "12px",
								"grande"  : "18px",
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

export default FrontMod6;
