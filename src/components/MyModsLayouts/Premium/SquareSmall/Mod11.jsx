import { Box, Group, Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod11 = ({data, isInWorkSpace, sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			pt="12%"
			pb="12%"
		>
			<Group
				spacing="0.1em"
				w={"100%"}
				h={"100%"}
			>
				<Box
					w="calc(100% / 2 - 0.05em)"
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
					w="calc(100% / 2 - 0.05em)"
					h="100%"
				>
					<ImgLayout
						isInWorkSpace={isInWorkSpace}
						sheetNo={sheetNo}
						imageNo={1}
						urlImage={data?.photos[1] ?? {}}
					/>
				</Box>
			</Group>
		</Stack>
	);
};

export default Mod11;
