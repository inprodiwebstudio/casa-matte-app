import { Center, Stack } from "@mantine/core";
//Own components
import Text              from "components/LayoutHandler/Text";
import { textInsertion } from "helpers";

const Mod38 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {

	const defaultText01 = "";

	return (
		<Center w="100%" h="100%">
			<Stack
				w="70%"
				p="0%"
				pt="0%"
				pb="0%"
			>
				<Text
					type="h1"
					sheetNo={sheetNo}
					data={textInsertion(data?.text[0], defaultText01, isInWorkSpace)}
					isInPaginator={isInPaginator}
					isThumbNail={isThumbNail}
					textNo={0}
				/>
			</Stack>
		</Center>
	);
};

export default Mod38;
