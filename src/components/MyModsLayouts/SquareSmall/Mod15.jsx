import { Stack, Box, Group } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod15 = ({data, isInWorkSpace, sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			pt="25%"
			pb="25%"
			p="2%"
		>
			<Group
				spacing="1%"
				w="100%"
				h={"100%"}
			>
				<Box
					sx={{
						flex : 1,
					}}
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
					sx={{
						flex : 1,
					}}
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
					sx={{
						flex : 1,
					}}
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

export default Mod15;
