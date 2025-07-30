import { Stack, Box, Group } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod17 = ({data, isInWorkSpace, sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			pt="34%"
			pb="34%"
			p="2%"
		>
			<Group
				spacing="0.1em"
				w="100%"
				h="100%"
			>
				<Box
					w="calc(100% / 3 - 0.067em)"
					h={"100%"}
				>
					<ImgLayout
						isInWorkSpace={isInWorkSpace}
						sheetNo={sheetNo}
						imageNo={0}
						urlImage={data?.photos[0] ?? {}}
					/>
				</Box>
				<Box
					w="calc(100% / 3 - 0.067em)"
					h={"100%"}
				>
					<ImgLayout
						isInWorkSpace={isInWorkSpace}
						sheetNo={sheetNo}
						imageNo={1}
						urlImage={data?.photos[1] ?? {}}
					/>
				</Box>
				<Box
					w="calc(100% / 3 - 0.067em)"
					h={"100%"}
				>
					<ImgLayout
						isInWorkSpace={isInWorkSpace}
						sheetNo={sheetNo}
						imageNo={2}
						urlImage={data?.photos[2] ?? {}}
					/>
				</Box>
			</Group>
		</Stack>
	);
};

export default Mod17;
