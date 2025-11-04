
import {Stack, Flex }    from "@mantine/core";
import { textInsertion } from "helpers";
import ImgLayoutOld      from "components/LayoutHandler/ImgLayoutOld";
import TextFix           from "components/LayoutHandler/TextFix";


//Own components

const FrontMod7 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {
	const defaultText01 = "<p style='text-align: center;'><span style='font-size: 42px; font-family: Aitana-Regular;'>TÍTULO</span></p>";

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
					top             : "7%",
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
					top             : "93%",
					backgroundColor : "white",
				}}
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
					width         : "100%",
					position      : "absolute",
					left          : "0%",
					paddingLeft   : "83%",
					height        : "100%",
					paddingTop    : "13%",
					paddingBottom : "13%",
				}}
			>
				<Stack
					sx={{
						width  : "fit-content",
						height : "100%",
					}}
					spacing={!isInWorkSpace ? "0.1em" : "0px"}
					align="center"
				>
					<Stack
						w="100%"
						h="100%"
						sx={{
							writingMode : "vertical-rl",
							transform   : "rotate(180deg)",
						}}
					>
						<TextFix
							sizes={{
								"chico"   : "38px",
								"regular" : "42px",
								"grande"  : "44px",
							}}
							isFront={true}
							align="center"
							sheetNo={sheetNo}
							textShell={() => <></>}
							data={textInsertion(data?.text[0], defaultText01, isInWorkSpace)}
							isInPaginator={isInPaginator}
							isThumbNail={isThumbNail}
							textNo={0}
						/>
					</Stack>
				</Stack>
			</Stack>
		</Flex>
	);
};

export default FrontMod7;
