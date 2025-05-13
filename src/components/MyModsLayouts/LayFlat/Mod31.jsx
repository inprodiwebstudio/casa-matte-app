import { Group, Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod29 = ({data, isInWorkSpace, sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="4%"
			pt="32%"
			pb="32%"
			spacing={"0.1em"}
		>
			<Group
				spacing="0.1em"
				w="100%"
				h="calc(50% - 0.05em)"
			>
				<Stack
					h="100%"
					w="calc(33.33% - 0.067em)"
				>
					<ImgLayout
						isInWorkSpace={isInWorkSpace}
						sheetNo={sheetNo}
						imageNo={3}
						urlImage={data?.photos[3] ?? {}}
					/>
				</Stack>
				<Stack
					h="100%"
					w="calc(33.33% - 0.067em)"
				>
					<ImgLayout
						isInWorkSpace={isInWorkSpace}
						sheetNo={sheetNo}
						imageNo={4}
						urlImage={data?.photos[4] ?? {}}
					/>
				</Stack>
				<Stack
					h="100%"
					w="calc(33.33% - 0.067em)"
				>
					<ImgLayout
						isInWorkSpace={isInWorkSpace}
						sheetNo={sheetNo}
						imageNo={5}
						urlImage={data?.photos[5] ?? {}}
					/>
				</Stack>
			</Group>
			<Group
				spacing="0.1em"
				w="100%"
				h="calc(50% - 0.05em)"
			>
				<Stack
					h="100%"
					w="calc(33.33% - 0.067em)"
				>
					<ImgLayout
						isInWorkSpace={isInWorkSpace}
						sheetNo={sheetNo}
						imageNo={3}
						urlImage={data?.photos[3] ?? {}}
					/>
				</Stack>
				<Stack
					h="100%"
					w="calc(33.33% - 0.067em)"
				>
					<ImgLayout
						isInWorkSpace={isInWorkSpace}
						sheetNo={sheetNo}
						imageNo={4}
						urlImage={data?.photos[4] ?? {}}
					/>
				</Stack>
				<Stack
					h="100%"
					w="calc(33.33% - 0.067em)"
				>
					<ImgLayout
						isInWorkSpace={isInWorkSpace}
						sheetNo={sheetNo}
						imageNo={5}
						urlImage={data?.photos[5] ?? {}}
					/>
				</Stack>
			</Group>
		</Stack>
	);
};

export default Mod29;
