import { Stack, Group } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";
const Mod8 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="15%"
			pt="30%"
			pb="30%"
		>
			<Group spacing={"0.1em"} w="100%" h="100%">
				<Stack w="calc(50% - 0.05em)" h="100%">
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={0}
					/>
				</Stack>
				<Stack w="calc(50% - 0.05em)" h="100%">
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={1}
					/>
				</Stack>
			</Group>
		</Stack>
	);
};

export default Mod8;
