import { Group, Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod62 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			pl="25%"
		>
			<Stack
				h="100%"
				w="100%"
				sx={{
					position : "relative",
				}}
			>
				<Stack w="100%" h="100%">
					<ImgLayout
						sheetNo={sheetNo}
						imageNo={0}
					/>
				</Stack>
				<Group
					w="40%"
					h="47%"
					sx={{
						position : "absolute",
						top      : "28%",
						right    : "87%",
					}}
					spacing={"0.1em"}
				>
					<Stack
						w="calc(50% - 0.05em)"
						h="100%"
					>
						<ImgLayout
							sheetNo={sheetNo}
							imageNo={1}
							isCoverImage={true}
						/>
					</Stack>
					<Stack
						w="calc(50% - 0.05em)"
						h="100%"
					>
						<ImgLayout
							sheetNo={sheetNo}
							imageNo={2}
							isCoverImage={true}
						/>
					</Stack>
				</Group>
			</Stack>
		</Stack>
	);
};

export default Mod62;
