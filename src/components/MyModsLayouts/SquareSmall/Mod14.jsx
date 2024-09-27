import { Box, Group, Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod14 = ({data, isInWorkSpace, sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			pt="25%"
			pb="25%"
		>
			<Group
				spacing="1%"
				w="100%"
				h={"100%"}
			>
				<Box
					h={"100%"}
					sx={{
						flex : 1,
					}}
				>
					<ImgLayout
						isInWorkSpace={isInWorkSpace}
						sheetNo={sheetNo}
						imageNo={0}
						urlImage={data?.photos[0] ?? {}}
					/>
				</Box>
				<Box
					h={"100%"}
					sx={{
						flex : 1,
					}}
				>
					<ImgLayout
						isInWorkSpace={isInWorkSpace}
						sheetNo={sheetNo}
						imageNo={1}
						urlImage={data?.photos[1] ?? {}}
					/>
				</Box>
				<Box
					h={"100%"}
					sx={{
						flex : 1,
					}}
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

export default Mod14;
