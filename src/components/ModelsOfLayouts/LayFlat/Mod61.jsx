import { Group, Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod61 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="2%"
			pt="10%"
			pb="10%"
		>
			<Stack
				spacing={"0.1em"}
				w="100%"
				h="100%"
			>
				<Group
					spacing="0.1em"
					w="100%"
					h="calc(50% - 0.05em)"
				>
					<Stack
						w="calc(33.33% - 0.067em)"
						h="100%"
					>
						<ImgLayout
							sheetNo={sheetNo}
							imageNo={0}
						/>
					</Stack>
					<Stack
						w="calc(33.33% - 0.067em)"
						h="100%"
					>
						<ImgLayout
							sheetNo={sheetNo}
							imageNo={1}
						/>
					</Stack>
					<Stack
						w="calc(33.33% - 0.067em)"
						h="100%"
					>
						<ImgLayout
							sheetNo={sheetNo}
							imageNo={2}
						/>
					</Stack>
				</Group>
				<Group
					spacing="0.1em"
					w="100%"
					h="calc(50% - 0.05em)"
				>
					<Stack
						w="calc(33.33% - 0.067em)"
						h="100%"
					>
						<ImgLayout
							sheetNo={sheetNo}
							imageNo={3}
						/>
					</Stack>
					<Stack
						w="calc(33.33% - 0.067em)"
						h="100%"
					>
						<ImgLayout
							sheetNo={sheetNo}
							imageNo={4}
						/>
					</Stack>
					<Stack
						w="calc(33.33% - 0.067em)"
						h="100%"
					>
						<ImgLayout
							sheetNo={sheetNo}
							imageNo={5}
						/>
					</Stack>
				</Group>
			</Stack>
		</Stack>
	);
};

export default Mod61;
