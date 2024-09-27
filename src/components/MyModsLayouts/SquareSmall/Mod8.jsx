import { Box, Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod8 = ({data, isInWorkSpace, sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			pl="15%"
			pr="15%"
			p="2%"
		>
			<Stack
				spacing="1%"
				w="100%"
				h="100%"
			>
				<Box
					h="50%"
					w="100%"
				>
					<ImgLayout
						isInWorkSpace={isInWorkSpace}
						sheetNo={sheetNo}
						imageNo={0}
						urlImage={data?.photos[0] ?? {}}
					/>
				</Box>
				<Box
					h="50%"
					w="100%"
				>
					<ImgLayout
						isInWorkSpace={isInWorkSpace}
						sheetNo={sheetNo}
						imageNo={1}
						urlImage={data?.photos[1] ?? {}}
					/>
				</Box>
			</Stack>
		</Stack>
	);
};

export default Mod8;
