import { Stack, Group, Box } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod37 = ({data, isInWorkSpace, sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="1%"
		>
			<Stack
				spacing={0}
				h="100%"
				w="100%"
			>
				<Group
					w="100%"
					h="33.333%"
					spacing={0}
				>
					<Box
						w="33.333%"
						h="100%"
						p="1%"
						pr="0.5%"
					>
						<ImgLayout
							isInWorkSpace={isInWorkSpace}
							sheetNo={sheetNo}
							imageNo={0}
							urlImage={data?.photos[0] ?? {}}
						/>
					</Box>
					<Box
						w="33.333%"
						h="100%"
						p="1%"
						pl="0.5%"
					>
						<ImgLayout
							isInWorkSpace={isInWorkSpace}
							sheetNo={sheetNo}
							imageNo={1}
							urlImage={data?.photos[1] ?? {}}
						/>
					</Box>
					<Box
						w="33.333%"
						h="100%"
						p="1%"
						pl="0"
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
					h="33.333%"
					spacing="0"
				>
					<Box
						w="33.333%"
						h="100%"
						p="1%"
						pr="0.5%"
						pt="0"
					>
						<ImgLayout
							isInWorkSpace={isInWorkSpace}
							sheetNo={sheetNo}
							imageNo={3}
							urlImage={data?.photos[3] ?? {}}
						/>
					</Box>
					<Box
						w="33.333%"
						h="100%"
						p="1%"
						pt="0"
						pl="0.5%"
					>
						<ImgLayout
							isInWorkSpace={isInWorkSpace}
							sheetNo={sheetNo}
							imageNo={4}
							urlImage={data?.photos[4] ?? {}}
						/>
					</Box>
					<Box
						w="33.333%"
						h="100%"
						pr="1%"
						pb="1%"
					>
						<ImgLayout
							isInWorkSpace={isInWorkSpace}
							sheetNo={sheetNo}
							imageNo={5}
							urlImage={data?.photos[5] ?? {}}
						/>
					</Box>
				</Group>
				<Group
					w="100%"
					h="33.333%"
					spacing="0"
				>
					<Box
						w="33.333%"
						h="100%"
						p="1%"
						pt="0"
						pr="0.5%"
					>
						<ImgLayout
							isInWorkSpace={isInWorkSpace}
							sheetNo={sheetNo}
							imageNo={6}
							urlImage={data?.photos[6] ?? {}}
						/>
					</Box>
					<Box
						w="33.333%"
						h="100%"
						p="1%"
						pt="0"
						pl="0.5%"
					>
						<ImgLayout
							isInWorkSpace={isInWorkSpace}
							sheetNo={sheetNo}
							imageNo={7}
							urlImage={data?.photos[7] ?? {}}
						/>
					</Box>
					<Box
						w="33.333%"
						h="100%"
						p="1%"
						pt="0"
						pl="0"
					>
						<ImgLayout
							isInWorkSpace={isInWorkSpace}
							sheetNo={sheetNo}
							imageNo={8}
							urlImage={data?.photos[8] ?? {}}
						/>
					</Box>
				</Group>
			</Stack>
		</Stack>
	);
};

export default Mod37;
