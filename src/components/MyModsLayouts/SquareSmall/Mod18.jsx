import { Stack, Flex } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod18 = ({data, isInWorkSpace, sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="0.8%"
			pl="1.66%"
		>
			<Stack
				spacing="0.05em"
				h="100%"
				w="100%"
			>
				<Flex w="100%" h="50%">
					<ImgLayout
						isInWorkSpace={isInWorkSpace}
						sheetNo={sheetNo}
						imageNo={0}
						urlImage={data?.photos[0] ?? {}}
					/>
				</Flex>
				<Flex w="100%" h="50%" gap="0.05em">
					<Stack w="50%" h="100%">
						<ImgLayout
							isInWorkSpace={isInWorkSpace}
							sheetNo={sheetNo}
							imageNo={1}
							urlImage={data?.photos[1] ?? {}}
						/>
					</Stack>
					<Stack w="50%" h="100%">
						<ImgLayout
							isInWorkSpace={isInWorkSpace}
							sheetNo={sheetNo}
							imageNo={2}
							urlImage={data?.photos[2] ?? {}}
						/>
					</Stack>
				</Flex>
			</Stack>
		</Stack>
	);
};

export default Mod18;
