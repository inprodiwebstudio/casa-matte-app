import { Group, Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod30 = ({data, isInWorkSpace, sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="13%"
		>
			<Group
				spacing="0.1em"
				w="100%"
				h="100%"
			>
				<Group
					w="100%"
					h="calc(50% - 0.05em)"
					spacing="0.1em"
				>
					<Stack
						w="calc(50% - 0.05em)"
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
						w="calc(50% - 0.05em)"
						h="100%"
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
					spacing={"0.1em"}
					w="100%"
					h="calc(50% - 0.05em)"
				>
					<Stack
						w="calc(50% - 0.05em)"
						h={"100%"}
					>
						<ImgLayout
							isInWorkSpace={isInWorkSpace}
							sheetNo={sheetNo}
							imageNo={2}
							urlImage={data?.photos[2] ?? {}}
						/>
					</Stack>
					<Stack
						w="calc(50% - 0.05em)"
						h={"100%"}
					>
						<ImgLayout
							isInWorkSpace={isInWorkSpace}
							sheetNo={sheetNo}
							imageNo={3}
							urlImage={data?.photos[3] ?? {}}
						/>
					</Stack>
				</Group>
			</Group>
		</Stack>
	);
};

export default Mod30;
