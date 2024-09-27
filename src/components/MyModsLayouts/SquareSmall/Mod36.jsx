import { Stack, Group, Box } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod36 = ({data, isInWorkSpace, sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="2%"
			pt="18%"
			pb="18%"
		>
			<Stack
				spacing="1.5%"
				h="100%"
				w="100%"
			>
				<Group
					w="100%"
					h="calc(100% / 2 - 0.5%)"
					spacing={"1%"}
					sx={{
						display : "flex",
					}}
				>
					<Box
						w="100%"
						sx={{
							flex : 3,
						}}
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
						w="100%"
						sx={{
							flex : 3,
						}}
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
						w="100%"
						sx={{
							flex : 3,
						}}
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
				<Group
					w="100%"
					h="calc(100% / 2 - 0.5%)"
					spacing={"1%"}
					sx={{
						display : "flex",
					}}
				>
					<Box
						w="100%"
						sx={{
							flex : 3,
						}}
						h="100%"
					>
						<ImgLayout
							isInWorkSpace={isInWorkSpace}
							sheetNo={sheetNo}
							imageNo={3}
							urlImage={data?.photos[3] ?? {}}
						/>
					</Box>
					<Box
						w="100%"
						sx={{
							flex : 3,
						}}
						h="100%"
					>
						<ImgLayout
							isInWorkSpace={isInWorkSpace}
							sheetNo={sheetNo}
							imageNo={4}
							urlImage={data?.photos[4] ?? {}}
						/>
					</Box>
					<Box
						w="100%"
						sx={{
							flex : 3,
						}}
						h="100%"
					>
						<ImgLayout
							isInWorkSpace={isInWorkSpace}
							sheetNo={sheetNo}
							imageNo={5}
							urlImage={data?.photos[5] ?? {}}
						/>
					</Box>
				</Group>
			</Stack>
		</Stack>
	);
};

export default Mod36;
