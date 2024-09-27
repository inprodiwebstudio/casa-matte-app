import { Box, Group, Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod22 = ({data, isInWorkSpace, sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="15%"
		>
			<Stack
				spacing="1%"
				h="100%"
				w="100%"
			>
				<Group
					w="100%"
					h="calc(100% / 2 - 0.5%)"
					spacing={"1%"}
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
							imageNo={1}
							urlImage={data?.photos[1] ?? {}}
						/>
					</Box>
				</Group>
				<Box
					w="100%"
					h="calc(100% / 2 - 0.5%)"
				>
					<ImgLayout
						isInWorkSpace={isInWorkSpace}
						sheetNo={sheetNo}
						imageNo={2}
						urlImage={data?.photos[2] ?? {}}
					/>
				</Box>
			</Stack>
		</Stack>
	);
};

export default Mod22;
