import { Stack, Flex } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod33 = ({data, isInWorkSpace, sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="0.2em"
			pr="0.2em"
		>
			<Stack
				spacing="0.1em"
				h="100%"
				w="100%"
			>
				<Flex w="100%" h="33.33%" gap="0.1em">
					<Stack w="50%" h="100%">
						<ImgLayout
							isInWorkSpace={isInWorkSpace}
							sheetNo={sheetNo}
							imageNo={0}
							urlImage={data?.photos[0] ?? {}}
						/>
					</Stack>
					<Stack w="50%" h="100%">
						<ImgLayout
							isInWorkSpace={isInWorkSpace}
							sheetNo={sheetNo}
							imageNo={1}
							urlImage={data?.photos[1] ?? {}}
						/>
					</Stack>
				</Flex>
				<Stack w="100%" h="33.33%">
					<ImgLayout
						isInWorkSpace={isInWorkSpace}
						sheetNo={sheetNo}
						imageNo={2}
						urlImage={data?.photos[2] ?? {}}
					/>
				</Stack>
				<Flex w="100%" h="33.33%" gap="0.1em">
					<Stack w="50%" h="100%">
						<ImgLayout
							isInWorkSpace={isInWorkSpace}
							sheetNo={sheetNo}
							imageNo={3}
							urlImage={data?.photos[3] ?? {}}
						/>
					</Stack>
					<Stack w="50%" h="100%">
						<ImgLayout
							isInWorkSpace={isInWorkSpace}
							sheetNo={sheetNo}
							imageNo={4}
							urlImage={data?.photos[4] ?? {}}
						/>
					</Stack>
				</Flex>
			</Stack>
		</Stack>
	);
};

export default Mod33;
