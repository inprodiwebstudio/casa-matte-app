import { Group, Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod75 = ({data, isInWorkSpace, sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="2%"
			spacing={"0.1em"}
		>
			<Group
				spacing="0.1em"
				w="100%"
				h="calc(50% - 0.05em)"
			>
				<Stack
					w="calc(20% - 0.08em)"
					h="100%"
				>
					<ImgLayout
						isInWorkSpace={isInWorkSpace}
						sheetNo={sheetNo}
						imageNo={0}
						urlImage={data?.photos[0] ?? {}}
					/>
				</Stack>
				<Stack
					w="calc(20% - 0.08em)"
					h="100%"
				>
					<ImgLayout
						isInWorkSpace={isInWorkSpace}
						sheetNo={sheetNo}
						imageNo={1}
						urlImage={data?.photos[1] ?? {}}
					/>
				</Stack>
				<Stack
					w="calc(20% - 0.08em)"
					h="100%"
				>
					<ImgLayout
						isInWorkSpace={isInWorkSpace}
						sheetNo={sheetNo}
						imageNo={2}
						urlImage={data?.photos[2] ?? {}}
					/>
				</Stack>
				<Stack
					w="calc(20% - 0.08em)"
					h="100%"
				>
					<ImgLayout
						isInWorkSpace={isInWorkSpace}
						sheetNo={sheetNo}
						imageNo={3}
						urlImage={data?.photos[3] ?? {}}
					/>
				</Stack>
				<Stack
					w="calc(20% - 0.08em)"
					h="100%"
				>
					<ImgLayout
						isInWorkSpace={isInWorkSpace}
						sheetNo={sheetNo}
						imageNo={4}
						urlImage={data?.photos[4] ?? {}}
					/>
				</Stack>
			</Group>
			<Group
				spacing="0.1em"
				w="100%"
				h="calc(50% - 0.05em)"
			>
				<Stack
					w="calc(20% - 0.08em)"
					h="100%"
				>
					<ImgLayout
						isInWorkSpace={isInWorkSpace}
						sheetNo={sheetNo}
						imageNo={5}
						urlImage={data?.photos[5] ?? {}}
					/>
				</Stack>
				<Stack
					w="calc(20% - 0.08em)"
					h="100%"
				>
					<ImgLayout
						isInWorkSpace={isInWorkSpace}
						sheetNo={sheetNo}
						imageNo={6}
						urlImage={data?.photos[6] ?? {}}
					/>
				</Stack>
				<Stack
					w="calc(20% - 0.08em)"
					h="100%"
				>
					<ImgLayout
						isInWorkSpace={isInWorkSpace}
						sheetNo={sheetNo}
						imageNo={7}
						urlImage={data?.photos[7] ?? {}}
					/>
				</Stack>
				<Stack
					w="calc(20% - 0.08em)"
					h="100%"
				>
					<ImgLayout
						isInWorkSpace={isInWorkSpace}
						sheetNo={sheetNo}
						imageNo={8}
						urlImage={data?.photos[8] ?? {}}
					/>
				</Stack>
				<Stack
					w="calc(20% - 0.08em)"
					h="100%"
				>
					<ImgLayout
						isInWorkSpace={isInWorkSpace}
						sheetNo={sheetNo}
						imageNo={9}
						urlImage={data?.photos[9] ?? {}}
					/>
				</Stack>
			</Group>
		</Stack>
	);
};

export default Mod75;
