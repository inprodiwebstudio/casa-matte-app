import { Stack, Flex } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod32 = ({data, isInWorkSpace, sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="0.8%"
			pl="1.66%"
		>
			<Flex
				gap="0.05em"
				h="100%"
				w="100%"
			>
				<Stack w="50%" h="100%" spacing="0.05em">
					<Stack w="100%" h="50%">
						<ImgLayout
							isInWorkSpace={isInWorkSpace}
							sheetNo={sheetNo}
							imageNo={0}
							urlImage={data?.photos[0] ?? {}}
						/>
					</Stack>
					<Stack w="100%" h="50%">
						<ImgLayout
							isInWorkSpace={isInWorkSpace}
							sheetNo={sheetNo}
							imageNo={1}
							urlImage={data?.photos[1] ?? {}}
						/>
					</Stack>
				</Stack>
				<Stack w="50%" h="100%" spacing="0.05em">
					<Stack w="100%" h="33.33%">
						<ImgLayout
							isInWorkSpace={isInWorkSpace}
							sheetNo={sheetNo}
							imageNo={2}
							urlImage={data?.photos[2] ?? {}}
						/>
					</Stack>
					<Stack w="100%" h="33.33%">
						<ImgLayout
							isInWorkSpace={isInWorkSpace}
							sheetNo={sheetNo}
							imageNo={3}
							urlImage={data?.photos[3] ?? {}}
						/>
					</Stack>
					<Stack w="100%" h="33.33%">
						<ImgLayout
							isInWorkSpace={isInWorkSpace}
							sheetNo={sheetNo}
							imageNo={4}
							urlImage={data?.photos[4] ?? {}}
						/>
					</Stack>
				</Stack>
			</Flex>
		</Stack>
	);
};

export default Mod32;
