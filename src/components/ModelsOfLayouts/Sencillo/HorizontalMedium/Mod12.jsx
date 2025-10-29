import { Stack, Group } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod12 = ({sheetNo}) => {
	return (
		<Group
			w="100%"
			h="100%"
			p="0%"
			spacing={"0.1em"}
		>
			<Stack
				w="calc(50% - 0.05em)"
				h="100%"
			>
				<ImgLayout
					imageNo={0}
					sheetNo={sheetNo}
				/>
			</Stack>
			<Stack
				w="calc(50% - 0.05em)"
				h="100%"
			>
				<ImgLayout
					imageNo={1}
					sheetNo={sheetNo}
				/>
			</Stack>
		</Group>
	);
};

export default Mod12;
