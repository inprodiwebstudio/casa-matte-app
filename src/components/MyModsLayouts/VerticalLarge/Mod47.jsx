import { Flex, Stack, Center } from "@mantine/core";
//Own components
import Text          from "components/LayoutHandler/Text";
import DividerLayout from "components/LayoutHandler/DividerLayout";


const Mod47 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {
	const handleWidthTextContainer = () => {
		if (isThumbNail) {
			return "38px";
		}
		if (isInPaginator) {
			return "99px";
		}
		if (isInWorkSpace) {
			return "40%";
		}
	};
	return (
		<Flex
			p="8%"
			w="100%"
			h="100%"
			justify="center"
			align="center"
		>
			<Stack
				w={handleWidthTextContainer()}
				mah="70%"
				spacing="0.2em"
				aria-hidden
			>
				<Stack
					spacing="0.2em"
				>
					<Center>
						<Text type="h2" data="" isInPaginator={isInPaginator} isThumbNail={isThumbNail} />
					</Center>
					<Center>
						<DividerLayout long="0.2em" position="v" />
					</Center>
				</Stack>
				<Stack
					spacing="0.1em"
				>
					<Text align="center" type="h5" data="Subtítulo 1" isInPaginator={isInPaginator} isThumbNail={isThumbNail} />
					<Text align="center" type="h5" data="Subtítulo 2" isInPaginator={isInPaginator} isThumbNail={isThumbNail} />
					<Text align="center" type="h5" data="Subtítulo 3" isInPaginator={isInPaginator} isThumbNail={isThumbNail} />
					<Text align="center" type="h5" data="Subtítulo 4" isInPaginator={isInPaginator} isThumbNail={isThumbNail} />
				</Stack>
			</Stack>
		</Flex>
	);
};

export default Mod47;
