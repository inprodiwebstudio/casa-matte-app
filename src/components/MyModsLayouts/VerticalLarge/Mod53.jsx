import {Stack, Flex }    from "@mantine/core";
import ImgLayout         from "components/LayoutHandler/ImgLayout";
import Text              from "components/LayoutHandler/Text";
import { textInsertion } from "helpers";
//Own components


const Mod55 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {

	const defaultText = "";

	return (
		<Flex
			pb="8%"
			w="100%"
			h="100%"
			gap="0.5em"
			direction="column"
		>
			<Stack
				spacing="0.2em"
				w="100%"
				h="100%"
				align="flex-end"
			>
				<Stack w="100%" h="100%">
					<ImgLayout
						isInWorkSpace={isInWorkSpace}
						sheetNo={sheetNo}
						imageNo={0}
						urlImage={data?.photos[0] ?? {}}
					/>
				</Stack>
				<Stack w="40%" mr="10%" spacing="0.15em">
					<Stack>
						<Text
							align="right"
							type="h1"
							sheetNo={sheetNo}
							data={textInsertion(data?.text[0], defaultText, isInWorkSpace)}
							isInPaginator={isInPaginator}
							isThumbNail={isThumbNail}
						/>
					</Stack>
					<Stack>
						<Text
							align="right"
							type="h5"
							sheetNo={sheetNo}
							data={textInsertion(data?.text[1], defaultText, isInWorkSpace)}
							isInPaginator={isInPaginator}
							isThumbNail={isThumbNail}
						/>
					</Stack>
				</Stack>
			</Stack>
		</Flex>
	);
};

export default Mod55;
