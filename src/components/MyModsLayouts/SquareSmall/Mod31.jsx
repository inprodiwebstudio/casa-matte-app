import { Stack, Group, Box } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod31 = ({data, isInWorkSpace, sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="2%"
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
					spacing={"1%"}
					h="calc(100% / 2 - 0.5%)"
					w="100%"
				>
					<Box
						w="calc(100% / 2 - 0.5%)"
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
						w="calc(100% / 2 - 0.5%)"
						h="100%"
					>
						<ImgLayout
							isInWorkSpace={isInWorkSpace}
							sheetNo={sheetNo}
							imageNo={4}
							urlImage={data?.photos[4] ?? {}}
						/>
					</Box>
				</Group>
			</Stack>
		</Stack>
	);
};

export default Mod31;
