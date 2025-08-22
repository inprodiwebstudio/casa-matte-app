
import {Stack, Flex }    from "@mantine/core";
import ImgLayout         from "components/LayoutHandler/ImgLayout";
import { textInsertion } from "helpers";
import Text              from "components/LayoutHandler/Text";


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
						<Text
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
