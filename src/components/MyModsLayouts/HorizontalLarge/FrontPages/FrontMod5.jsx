
import {Stack, Flex } from "@mantine/core";
import ImgLayoutOld   from "components/LayoutHandler/ImgLayoutOld";
//Own components
import Text              from "components/LayoutHandler/Text";
import { TextShell }     from "core/components";
import { textInsertion } from "helpers";

const FrontMod5 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {
	const defaultText01 = "<p style='text-align: center;'><span style='font-size: 48px; font-family: Aitana-Regular;'>TÍTULO</span></p>";

	return (
		<Flex
			p="5%"
			w="100%"
			h="100%"
			justify="center"
			align="center"
			gap="0.4em"
			direction="column"
		>
			<Stack
				w="70%"
				h="fit-content"
			>
				<Text
					sizes={{
						"chico"   : "46px",
						"regular" : "48px",
						"grande"  : "50px",
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
				w="100%"
				h="100%"
			>
				<ImgLayoutOld
					isInWorkSpace={isInWorkSpace}
					sheetNo={sheetNo}
					imageNo={0}
					urlImage={data?.photos[0] ?? {}}
				/>
			</Stack>
		</Flex>
	);
};

export default FrontMod5;
