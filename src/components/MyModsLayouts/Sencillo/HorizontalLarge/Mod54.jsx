import { Group, Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod54 = ({data, isInWorkSpace, sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="4%"
			spacing={"0.1em"}
		>
			<Group
				spacing="0.1em"
				w="100%"
				h="calc(50% - 0.05em)"
			>
				<Stack
					h="100%"
					w="calc(33.2% - 0.05em)"
				>
					<ImgLayout
						isInWorkSpace={isInWorkSpace}
						sheetNo={sheetNo}
						imageNo={0}
						urlImage={data?.photos[0] ?? {}}
					/>
				</Stack>
				<Stack
					h="100%"
					w="calc(66.8% - 0.05em)"
				>
					<ImgLayout
						isInWorkSpace={isInWorkSpace}
						sheetNo={sheetNo}
						imageNo={1}
						urlImage={data?.photos[1] ?? {}}
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
					w="calc(66.8% - 0.05em)"
				>
					<ImgLayout
						isInWorkSpace={isInWorkSpace}
						sheetNo={sheetNo}
						imageNo={2}
						urlImage={data?.photos[2] ?? {}}
					/>
				</Stack>
				<Stack
					h="100%"
					w="calc(33.2% - 0.05em)"
				>
					<ImgLayout
						isInWorkSpace={isInWorkSpace}
						sheetNo={sheetNo}
						imageNo={3}
						urlImage={data?.photos[3] ?? {}}
					/>
				</Stack>
			</Group>
		</Stack>
	);
};

export default Mod54;
