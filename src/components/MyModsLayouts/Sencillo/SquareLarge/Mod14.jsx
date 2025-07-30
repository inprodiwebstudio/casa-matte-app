import { Box, Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod14 = ({data, isInWorkSpace, sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			pl="25%"
			pr="25%"
			p="20%"
		>
			<Stack
				spacing="0.1em"
				w="100%"
				h={"100%"}
			>
				<Box
					h="calc(100% / 2 - 0.05em)"
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
					h="calc(100% / 2 - 0.05em)"
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

export default Mod14;
