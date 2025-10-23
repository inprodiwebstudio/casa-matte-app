import { Group, Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod36 = ({data, isInWorkSpace, sheetNo}) => {
	return (
		<Group
			w="100%"
			h="100%"
			p="4%"
			spacing={"0.1em"}
		>
			<Stack
				spacing="0.1em"
				w="calc(33.33% - 0.067em)"
				h="100%"
			>
				<Stack
					h="calc(33.33% - 0.05em)"
					w="100%"
				>
					<ImgLayout
						isInWorkSpace={isInWorkSpace}
						sheetNo={sheetNo}
						imageNo={0}
						urlImage={data?.photos[0] ?? {}}
					/>
				</Stack>
				<Stack
					h="calc(66.67% - 0.05em)"
					w="100%"
				>
					<ImgLayout
						isInWorkSpace={isInWorkSpace}
						sheetNo={sheetNo}
						imageNo={1}
						urlImage={data?.photos[1] ?? {}}
					/>
				</Stack>
			</Stack>
			<Stack
				spacing="0.1em"
				w="calc(33.33% - 0.067em)"
				h="100%"
			>
				<Stack
					h="calc(33.33% - 0.067em)"
					w="100%"
				>
					<ImgLayout
						isInWorkSpace={isInWorkSpace}
						sheetNo={sheetNo}
						imageNo={2}
						urlImage={data?.photos[2] ?? {}}
					/>
				</Stack>
				<Stack
					h="calc(33.33% - 0.067em)"
					w="100%"
				>
					<ImgLayout
						isInWorkSpace={isInWorkSpace}
						sheetNo={sheetNo}
						imageNo={3}
						urlImage={data?.photos[3] ?? {}}
					/>
				</Stack>
				<Stack
					h="calc(33.33% - 0.067em)"
					w="100%"
				>
					<ImgLayout
						isInWorkSpace={isInWorkSpace}
						sheetNo={sheetNo}
						imageNo={4}
						urlImage={data?.photos[4] ?? {}}
					/>
				</Stack>
			</Stack>
			<Stack
				spacing="0.1em"
				w="calc(33.33% - 0.067em)"
				h="100%"
			>
				<Stack
					h="calc(66.57% - 0.05em)"
					w="100%"
				>
					<ImgLayout
						isInWorkSpace={isInWorkSpace}
						sheetNo={sheetNo}
						imageNo={5}
						urlImage={data?.photos[5] ?? {}}
					/>
				</Stack>
				<Stack
					h="calc(33.33% - 0.05em)"
					w="100%"
				>
					<ImgLayout
						isInWorkSpace={isInWorkSpace}
						sheetNo={sheetNo}
						imageNo={6}
						urlImage={data?.photos[6] ?? {}}
					/>
				</Stack>
			</Stack>
		</Group>
	);
};

export default Mod36;
