import { Group, Stack } from "@mantine/core";
//Own components
import ImgLayout from "components/LayoutHandler/ImgLayout";

const Mod60 = ({sheetNo}) => {
	return (
		<Stack
			w="100%"
			h="100%"
			p="2%"
			pt="4%"
			pb="4%"
		>
			<Stack
				w="100%"
				h="100%"
				spacing={"0.1em"}
			>
				<Group
					spacing="0.1em"
					w="100%"
					h="calc(33.33% - 0.067em)"
				>
					<Stack
						w="calc(20% - 0.08em)"
						h="100%"
					>
						<ImgLayout
							sheetNo={sheetNo}
							imageNo={0}
						/>
					</Stack>
					<Stack
						w="calc(20% - 0.08em)"
						h="100%"
					>
						<ImgLayout
							sheetNo={sheetNo}
							imageNo={1}
						/>
					</Stack>
					<Stack
						w="calc(20% - 0.08em)"
						h="100%"
					>
						<ImgLayout
							sheetNo={sheetNo}
							imageNo={2}
						/>
					</Stack>
					<Stack
						w="calc(20% - 0.08em)"
						h="100%"
					>
						<ImgLayout
							sheetNo={sheetNo}
							imageNo={3}
						/>
					</Stack>
					<Stack
						w="calc(20% - 0.08em)"
						h="100%"
					>
						<ImgLayout
							sheetNo={sheetNo}
							imageNo={4}
						/>
					</Stack>
				</Group>
				<Group
					spacing="0.1em"
					w="100%"
					h="calc(33.33% - 0.067em)"
				>
					<Stack
						w="calc(20% - 0.08em)"
						h="100%"
					>
						<ImgLayout
							sheetNo={sheetNo}
							imageNo={5}
						/>
					</Stack>
					<Stack
						w="calc(20% - 0.08em)"
						h="100%"
					>
						<ImgLayout
							sheetNo={sheetNo}
							imageNo={6}
						/>
					</Stack>
					<Stack
						w="calc(20% - 0.08em)"
						h="100%"
					>
						<ImgLayout
							sheetNo={sheetNo}
							imageNo={7}
						/>
					</Stack>
					<Stack
						w="calc(20% - 0.08em)"
						h="100%"
					>
						<ImgLayout
							sheetNo={sheetNo}
							imageNo={8}
						/>
					</Stack>
					<Stack
						w="calc(20% - 0.08em)"
						h="100%"
					>
						<ImgLayout
							sheetNo={sheetNo}
							imageNo={9}
						/>
					</Stack>
				</Group>
				<Group
					spacing="0.1em"
					w="100%"
					h="calc(33.33% - 0.067em)"
				>
					<Stack
						w="calc(20% - 0.08em)"
						h="100%"
					>
						<ImgLayout
							sheetNo={sheetNo}
							imageNo={10}
						/>
					</Stack>
					<Stack
						w="calc(20% - 0.08em)"
						h="100%"
					>
						<ImgLayout
							sheetNo={sheetNo}
							imageNo={11}
						/>
					</Stack>
					<Stack
						w="calc(20% - 0.08em)"
						h="100%"
					>
						<ImgLayout
							sheetNo={sheetNo}
							imageNo={12}
						/>
					</Stack>
					<Stack
						w="calc(20% - 0.08em)"
						h="100%"
					>
						<ImgLayout
							sheetNo={sheetNo}
							imageNo={13}
						/>
					</Stack>
					<Stack
						w="calc(20% - 0.08em)"
						h="100%"
					>
						<ImgLayout
							sheetNo={sheetNo}
							imageNo={14}
						/>
					</Stack>
				</Group>
			</Stack>
		</Stack>
	);
};

export default Mod60;
