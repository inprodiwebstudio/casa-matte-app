import { Stack, Box, Group } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod16 = ({data, isInWorkSpace, sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			pt="28%"
			pb="28%"
			p="9%"
		>
			<Group
				spacing="0.07em"
				w="100%"
				h="100%"
			>
				<Box
					sx={{
						flex : 1,
					}}
					w="100%"
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
					sx={{
						flex : 1,
					}}
					w="100%"
					h="100%"
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
					w="100%"
					h="100%"
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

export default Mod16;
