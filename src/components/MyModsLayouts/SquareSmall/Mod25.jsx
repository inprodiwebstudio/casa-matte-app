import { Stack, Group, Box } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod25 = ({data, isInWorkSpace, sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="20%"
		>
			<Stack
				spacing="0.08em"
				h="100%"
				w="100%"
			>
				<Group
					w="100%"
					h={"100%"}
					spacing={"0.08em"}
					sx={{
						flex : 1,
					}}
				>
					<Box
						w="100%"
						h="100%"
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
						w="100%"
						h="100%"
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
				</Group>
				<Group
					w="100%"
					h="100%"
					spacing="0.08em"
					sx={{
						flex : 1,
					}}
				>
					<Box
						w="100%"
						h="100%"
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
							imageNo={3}
							urlImage={data?.photos[3] ?? {}}
						/>
					</Box>
				</Group>
			</Stack>
		</Stack>
	);
};

export default Mod25;
