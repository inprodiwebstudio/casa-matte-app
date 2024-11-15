import { Stack, Group, Box } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod27 = ({data, isInWorkSpace, sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="5%"
		>
			<Group
				spacing="0.1em"
				h="100%"
				w="100%"
			>
				<Box
					w="calc(70% - 0.05em)"
					h="100%"
				>
					<ImgLayout
						isInWorkSpace={isInWorkSpace}
						sheetNo={sheetNo}
						imageNo={2}
						urlImage={data?.photos[2] ?? {}}
					/>
				</Box>
				<Stack
					w="calc(30% - 0.05em)"
					h="100%"
					spacing={"0.1em"}
				>
					<Box
						w="100%"
						h="calc(100% / 2 - 0.05em)"
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
						h="calc(100% / 2 - 0.05em)"
					>
						<ImgLayout
							isInWorkSpace={isInWorkSpace}
							sheetNo={sheetNo}
							imageNo={1}
							urlImage={data?.photos[1] ?? {}}
						/>
					</Box>
				</Stack>
			</Group>
		</Stack>
	);
};

export default Mod27;
