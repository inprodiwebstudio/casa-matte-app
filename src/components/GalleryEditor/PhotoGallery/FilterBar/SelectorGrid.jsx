import { Group, Stack } from "@mantine/core";

const SelectorGrid = () => {
	//#58595b
	return (
		<Group
			spacing={"5px"}
			style={{
				cursor     : "pointer",
				userSelect : "none",
			}}
		>
			<Group spacing="1px">
				<Stack
					w="6px"
					h="6px"
					style={{
						background : "#58595b",
					}}
				>
					&nbsp;
				</Stack>
				<Stack
					w="6px"
					h="6px"
					style={{
						background : "#58595b",
					}}
				>
					&nbsp;
				</Stack>
				<Stack
					w="6px"
					h="6px"
					style={{
						background : "#58595b",
					}}
				>
					&nbsp;
				</Stack>
			</Group>
			<Group
				spacing="1px"
			>
				<Stack
					w="8px"
					h="8px"
					style={{
						background : "#58595b",
					}}
				>
					&nbsp;
				</Stack>
				<Stack
					w="8px"
					h="8px"
					style={{
						background : "#58595b",
					}}
				>
					&nbsp;
				</Stack>
			</Group>
		</Group>
	);
};

export default SelectorGrid;
