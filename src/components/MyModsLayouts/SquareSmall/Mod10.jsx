import { Box, Group, Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod10 = ({data, isInWorkSpace, sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="2%"
			pt="15%"
			pb="15%"
		>
			<Group
				spacing="1%"
				w="100%"
				h="100%"
			>
				<Box
					w="calc(100% / 2 - 0.5%)"
					h="100%"
				>
					<ImgLayout
						isInWorkSpace={isInWorkSpace}
						sheetNo={sheetNo}
						imageNo={0}
						urlImage={data?.photos[0] ?? {}}
					/>
				</Box>
				<Box
					w="calc(100% / 2 - 0.5%)"
					h="100%"
				>
					<ImgLayout
						isInWorkSpace={isInWorkSpace}
						sheetNo={sheetNo}
						imageNo={0}
						urlImage={data?.photos[0] ?? {}}
					/>
				</Box>
			</Group>
		</Stack>
	);
};

export default Mod10;
