import { Flex, Stack } from "@mantine/core";
//Own components
import Text from "components/LayoutHandler/Text";


const Mod49 = ({data, isInWorkSpace, sheetNo, isInPaginator, isThumbNail}) => {
	const handleWidthTextContainer = () => {
		if (isThumbNail) {
			return "auto";
		}
		if (isInPaginator) {
			return "auto";
		}
		if (isInWorkSpace) {
			return "auto";
		}
	};
	return (
		<Flex
			p="8%"
			pb="30%"
			pt="30%"
			w="100%"
			h="100%"
			justify="center"
			align="center"
			direction="column"
			gap="0.35em"
			sx={{overflow : "hidden"}}
		>
			<Stack
				w={handleWidthTextContainer()}
				mah="70%"
				spacing="0.15em"
				aria-hidden
			>
				<Text align="left" type="h3" data="" isInPaginator={isInPaginator} isThumbNail={isThumbNail} />
				<Stack
					spacing="0.1em"
				>
					<Text align="left" type="h5" data="Subtítulo 1" isInPaginator={isInPaginator} isThumbNail={isThumbNail} />
					<Text align="left" type="h5" data="Subtítulo 2" isInPaginator={isInPaginator} isThumbNail={isThumbNail} />
					<Text align="left" type="h5" data="Subtítulo 3" isInPaginator={isInPaginator} isThumbNail={isThumbNail} />
					<Text align="left" type="h5" data="Subtítulo 4" isInPaginator={isInPaginator} isThumbNail={isThumbNail} />
				</Stack>
			</Stack>
			<Stack
				w={handleWidthTextContainer()}
				mah="70%"
				spacing="0.2em"
				aria-hidden
			>
				<Text align="left" type="h3" data="" isInPaginator={isInPaginator} isThumbNail={isThumbNail} />
				<Stack
					spacing="0.1em"
				>
					<Text align="left" type="h5" data="Subtítulo 1" isInPaginator={isInPaginator} isThumbNail={isThumbNail} />
					<Text align="left" type="h5" data="Subtítulo 2" isInPaginator={isInPaginator} isThumbNail={isThumbNail} />
					<Text align="left" type="h5" data="Subtítulo 3" isInPaginator={isInPaginator} isThumbNail={isThumbNail} />
					<Text align="left" type="h5" data="Subtítulo 4" isInPaginator={isInPaginator} isThumbNail={isThumbNail} />
				</Stack>
			</Stack>
			{
				!isThumbNail && (
					<Stack
						w={handleWidthTextContainer()}
						mah="70%"
						spacing="0.2em"
						aria-hidden
					>
						<Text align="left" type="h3" data="" isInPaginator={isInPaginator} isThumbNail={isThumbNail} />
						<Stack
							spacing="0.1em"
						>
							<Text align="left" type="h5" data="Subtítulo 1" isInPaginator={isInPaginator} isThumbNail={isThumbNail} />
							<Text align="left" type="h5" data="Subtítulo 2" isInPaginator={isInPaginator} isThumbNail={isThumbNail} />
							<Text align="left" type="h5" data="Subtítulo 3" isInPaginator={isInPaginator} isThumbNail={isThumbNail} />
							<Text align="left" type="h5" data="Subtítulo 4" isInPaginator={isInPaginator} isThumbNail={isThumbNail} />
						</Stack>
					</Stack>
				)
			}
		</Flex>
	);
};

export default Mod49;
