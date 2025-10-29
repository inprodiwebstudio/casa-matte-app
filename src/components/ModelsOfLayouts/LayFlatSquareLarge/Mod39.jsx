import { Group, Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod39 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="3%"
		>
			<Stack
				spacing="0.1em"
				h="100%"
				w="100%"
			>
				<Stack h="70%" w="100%">
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={0}
					/>
				</Stack>
				<Group
					h="30%"
					w="100%"
					spacing={"0.1em"}
				>
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
					<Stack
						w="calc(33.33% - 0.067em)"
						h="100%"
					>
						<ImgLayout
							sheetNo={sheetNo}
							imageNo={3}
						/>
					</Stack>
				</Group>
			</Stack>
		</Stack>
	);
};

export default Mod39;
